from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import Order
from .serializers import OrderSerializer


@api_view(['GET'])
def get_pending_order(request):
    pending_order = Order.objects.filter(
        user=request.user,
        status='PENDING'
    )

    if not pending_order.exists():
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = OrderSerializer(pending_order.first())

    return Response(serializer.data)

