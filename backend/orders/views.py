from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Order, OrderItem
from .serializers import OrderSerializer
from products.models import Product
from carts.models import Cart

import json

@api_view(['GET'])
def get_pending_order(request):
    pending_order = Order.objects.get_or_create(
        user=request.user,
        status='PENDING'
    )

    if not pending_order.exists():
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = OrderSerializer(pending_order.first())

    return Response(serializer.data)


@api_view(['POST'])
def generate_order_items(request):
    data = json.loads(request.body)
    cart = data['cart']

    # Get current order
    order, created = Order.objects.get_or_create(
        user=request.user,
        status='PENDING'
    )
    
    # Iterate through cart and create OrderItem(s)
    for item in cart['items']:
        product = Product.objects.get(
            id=item['product']['id']
        )
        OrderItem.objects.create(
            order=order,
            item=product,
            quantity=item['quantity']
        )

    return Response({'test': 'successful'})


@api_view(['PATCH'])
def change_order_status(request):
    data = json.loads(request.body)

    order = Order.objects.get(
        user=request.user,
        status='PENDING'
    )

    print(order)

    if data['type'] == 'to-processing':
        order.status = 'PROCESSING'
        order.save()

    return Response({'status': 'State changed successfully!'})


