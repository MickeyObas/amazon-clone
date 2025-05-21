from rest_framework import serializers

from categories.serializers import CategorySerializer

from .models import Brand, Product, ProductAttributeValue, ProductHighlight


class ProductAttributesSerializer(serializers.ModelSerializer):
    attribute = serializers.SerializerMethodField()

    class Meta:
        model = ProductAttributeValue
        fields = ["attribute", "value"]

    def get_attribute(self, obj):
        return obj.attribute.title


class ProductHighlightSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductHighlight
        fields = ["title", "description"]


class ProductSerializer(serializers.ModelSerializer):
    brand = serializers.SerializerMethodField(read_only=True)
    attributes = ProductAttributesSerializer(many=True, read_only=True)
    highlights = ProductHighlightSerializer(many=True, read_only=True)
    picture = serializers.SerializerMethodField(read_only=True)
    star_ratings = serializers.SerializerMethodField(read_only=True)
    category = CategorySerializer()

    def get_brand(self, obj):
        return obj.brand.title if obj.brand else None

    def get_picture(self, obj):
        request = self.context.get("request")
        if request and obj.picture:
            return request.build_absolute_uri(obj.picture.url)
        return None

    def get_star_ratings(self, obj):
        return obj.get_star_ratings()

    class Meta:
        model = Product
        fields = [
            "id",
            "brand",
            "title",
            "attributes",
            "description",
            "picture",
            "price",
            "rating",
            "quantity_in_stock",
            "avg_rating",
            "rating_count",
            "extra_attributes",
            "category",
            "highlights",
            "star_ratings",
        ]


class BrandSerializer(serializers.ModelSerializer):
    class Meta:
        model = Brand
        fields = ["title", "logo", "website"]
