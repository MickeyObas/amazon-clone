from rest_framework import status, serializers
from rest_framework.response import Response
from rest_framework.decorators import api_view

from products.models import Product
from carts.models import Cart, CartItem
from .serializers import CartSerializer, CartItemSerializer

import json


@api_view(['GET'])
def cart(request):
    try:
        cart = Cart.objects.get(
            user=request.user
        )
    except Cart.DoesNotExist:
        return Response({'error': 'User cart does not exist'})
    
    serializer = CartSerializer(cart, context={'request': request})

    return Response(serializer.data)


@api_view(['PATCH'])
def update_cart(request, item_id):
    cart_item = CartItem.objects.get(id=item_id)
    cart = cart_item.cart
    quantity = json.loads(request.body)['quantity']
    if quantity is not None and quantity > 0:
        cart_item.quantity = quantity
        cart_item.save()
        return Response({
            'status': 'Item quantity updated',
            'total_quantity': cart.get_total_quantity(),
            'total_price': cart.get_total_price()
        })
    return Response({'error': 'Invalid Quantity'})
    

@api_view(['POST'])
def add_to_cart(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)
    
    cart, created = Cart.objects.get_or_create(
        user=request.user
    )

    cart_item, created = CartItem.objects.get_or_create(
        cart=cart,
        product=product,
    )

    if not created:
        cart_item.quantity += 1
        cart_item.save()
    else:
        quantity = json.loads(request.body)['quantity']
        cart_item.quantity = quantity
        cart_item.save()

    return Response({
        'message': 'Item added to cart successfully',
        'cart': CartSerializer(cart).data,
        'cart_item': {
            'id': cart_item.id,
            'quantity': cart_item.quantity
        }
    })
    

@api_view(['DELETE'])
def delete_from_cart(request, item_id):
    cart_item = CartItem.objects.get(id=item_id)
    cart = cart_item.cart
    cart_item.delete()
    return Response({
        'status': 'Item deleted from cart successfully',
        'total_quantity': cart.get_total_quantity(),
        'total_price': cart.get_total_price()
    }, 
        status=status.HTTP_204_NO_CONTENT)


    
