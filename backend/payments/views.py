from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import PaymentCard
from .serializers import PaymentCardSerializer

import json
import datetime


@api_view(['POST'])
def add_card(request):
    data = json.loads(request.body)
    print(data)

    # If payment card has previously been added
    if PaymentCard.objects.filter(
        number=data['number']
    ).exists():
        return Response({'message': 'This card has already been added.'}, status=status.HTTP_409_CONFLICT)
    
    card_expiry_date = datetime.datetime.strptime(data['expDate'], '%Y-%m-%d')
    
    payment_card = PaymentCard.objects.create(
        user=request.user,
        number=data['number'],
        type='DEBIT',
        name_on_card=data['name'],
        cvv=data['cvv'],
        expiration_date=card_expiry_date
    )

    # serializer = PaymentCardSerializer(data)
    return Response({'test':'test'})


@api_view(['GET'])
def get_payment_cards(request):
    payment_cards = PaymentCard.objects.filter(
        user=request.user
    )
    
    serializer = PaymentCardSerializer(payment_cards, many=True)

    return Response(serializer.data)