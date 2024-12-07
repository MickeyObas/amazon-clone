import uuid
from django.db import models
from django.conf import settings

class Cart(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.OneToOneField(settings.AUTH_USER_MODEL, null=True, blank=True, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.id)
    
    def get_total_quantity(self):
        return sum(item.quantity for item in self.items.all())
    
    def get_total_price(self):
        return sum(item.get_subtotal() for item in self.items.all())


class CartItem(models.Model):
    cart = models.ForeignKey('carts.Cart', on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=1)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created']

    def get_subtotal(self):
        return self.product.price * self.quantity

    def __str__(self):
        return f"{self.cart.user.first_name} - [{self.product.title}] * {self.quantity}" 

    
