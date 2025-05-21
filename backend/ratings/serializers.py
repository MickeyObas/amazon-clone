from rest_framework import serializers

from accounts.serializers import UserSerializer

from .models import Rating


class RatingSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Rating
        fields = ["user", "product", "rating", "heading", "review", "created_at"]
