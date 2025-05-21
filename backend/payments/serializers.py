from rest_framework import serializers

from .models import PaymentCard


class PaymentCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = PaymentCard
        fields = [
            "id",
            "user",
            "type",
            "number",
            "name_on_card",
            "cvv",
            "expiration_date",
        ]
