from rest_framework import status, serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view

from products.models import Product
from carts.models import Cart, CartItem
from .serializers import CartSerializer

import json

@api_view(['POST'])
def add_to_cart(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
    
    cart, created = Cart.objects.get_or_create(
        user=request.user
    )

    quantity = json.loads(request.body)['quantity']

    cart_item, created = CartItem.objects.get_or_create(
        cart=cart,
        product=product,
    )

    if not created:
        cart_item.quantity += 1
        cart_item.save()
    else:
        cart_item.quantity = quantity
        cart_item.save()

    return Response({
        'message': 'Item added to cart successfully',
        'cart': CartSerializer(cart).data
    })
    


    
