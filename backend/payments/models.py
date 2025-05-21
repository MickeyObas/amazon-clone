from django.conf import settings
from django.db import models


class PaymentCard(models.Model):
    class CardType(models.TextChoices):
        CREDIT = ("CREDIT", "Credit")
        DEBIT = ("DEBIT", "Debit")

    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    number = models.CharField(max_length=28)
    type = models.CharField(
        max_length=10, choices=CardType.choices, default=CardType.DEBIT
    )
    name_on_card = models.CharField(max_length=255)
    cvv = models.CharField(max_length=3)
    expiration_date = models.DateField()
