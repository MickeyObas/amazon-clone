from rest_framework import serializers

from .models import Category


class CategorySerializer(serializers.ModelSerializer):
    subcategories = serializers.SerializerMethodField(read_only=True)

    def get_subcategories(self, obj):
        return [subcategory.title for subcategory in obj.subcategories.all()]

    class Meta:
        model = Category
        fields = ["id", "title", "parent", "subcategories"]
