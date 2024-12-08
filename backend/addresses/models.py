from django.db import models
from django.conf import settings


class Address(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    postal_code = models.CharField(max_length=255)
    country = models.CharField(max_length=255)
    phone = models.CharField(max_length=20)
    is_default = models.BooleanField(default=False)
    delivery_instructions = models.CharField(max_length=255, blank=True, null=True)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.user.first_name}'s address"

