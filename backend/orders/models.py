from django.db import models
from django.conf import settings


class Order(models.Model):
    class Status(models.TextChoices):
        PENDING = 'PENDING', 'Pending'
        DELIVERED = 'DELIVERED', 'Delivered'
        PROCESSING = 'PROCESSING', 'Processing'
        CANCELLED = 'CANCELLED', 'Cancelled'
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    address = models.ForeignKey('addresses.Address', models.CASCADE)
    status = models.CharField(max_length=25, choices=Status.choices, default=Status.PENDING)
    payment_is_processed = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)


class OrderItem(models.Model):
    order = models.ForeignKey('orders.Order', on_delete=models.CASCADE)
    item = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)

