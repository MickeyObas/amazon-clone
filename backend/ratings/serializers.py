from rest_framework import serializers

from .models import Rating
from accounts.serializers import UserSerializer


class RatingSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Rating
        fields = [
            'user',
            'product',
            'rating',
            'heading',
            'review',
            'created_at'
        ]