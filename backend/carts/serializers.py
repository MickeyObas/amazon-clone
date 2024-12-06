from rest_framework import serializers

from .models import Cart, CartItem
from products.serializers import (
    ProductSerializer
)


class CartItemSerializer(serializers.ModelSerializer):
    product_title = serializers.CharField(source='product.title')
    product_price = serializers.DecimalField(source='product.price', max_digits=10, decimal_places=2)
    product = ProductSerializer()

    # def get_product(self, obj):
    #     return ProductSerializer(obj, context={'request': self.cart.context['request']})

    def to_representation(self, instance):
        representation =  super().to_representation(instance)
        request = self.context.get('request')

        if request:
            product_serializer = ProductSerializer(
                instance.product,
                context={'request': request}
            )
            representation['product'] = product_serializer.data
        
        return representation

    class Meta:
        model = CartItem
        fields = [
            'id',
            'product',
            'product_title',
            'product_price',
            'quantity'
        ]

class CartSerializer(serializers.ModelSerializer):
    items = CartItemSerializer(many=True, read_only=True)
    total_quantity = serializers.SerializerMethodField(read_only=True)
    total_price = serializers.SerializerMethodField(read_only=True)

    def get_total_quantity(self, obj):
        return obj.get_total_quantity()

    def get_total_price(self, obj):
        return obj.get_total_price()

    class Meta:
        model = Cart
        fields = [
            'total_quantity',
            'total_price',
            'items',
        ]