from django.db.models import Avg, Count
from django.db.models.signals import post_delete, post_save
from django.dispatch import receiver

from .models import Rating


@receiver(post_save, sender=Rating)
def update_product_rating_on_save(sender, instance, created, **kwargs):
    product = instance.product
    reviews = product.ratings.all()
    product.avg_rating = reviews.aggregate(Avg("rating"))["rating__avg"] or 0

    if created:
        product.rating_count += 1
    product.save()


@receiver(post_delete, sender=Rating)
def update_product_rating_on_delete(sender, instance, **kwargs):
    product = instance.product
    reviews = product.ratings.all()
    if reviews.exists():
        product.avg_rating = reviews.aggregate(Avg("rating"))["rating__avg"]
    else:
        product.avg_rating = 0
    product.rating_count -= 1
    product.save()
