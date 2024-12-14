from django.http import JsonResponse
from django.conf import settings
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import PaymentCard
from .serializers import PaymentCardSerializer

import json
import datetime
import stripe

stripe.api_key = settings.STRIPE_SECRET_KEY



@api_view(['POST'])
def create_payment_intent(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            # Receive total amount in cents
            amount = data['amount']
            intent = stripe.PaymentIntent.create(
                amount=amount,
                currency='usd',
                automatic_payment_methods={'enabled': True}
            )
            return JsonResponse({'clientSecret': intent['client_secret']})
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)


@api_view(['POST'])
def add_card(request):
    data = json.loads(request.body)
    print(data)

    # If payment card has previously been added
    if PaymentCard.objects.filter(
        number=data['number']
    ).exists():
        return Response({'message': 'This card has already been added.'}, status=status.HTTP_409_CONFLICT)
    
    card_expiry_date = datetime.datetime.strptime(data['expDate'], '%Y-%m-%d').date()
    
    payment_card = PaymentCard.objects.create(
        user=request.user,
        number=data['number'],
        type='DEBIT',
        name_on_card=data['name'],
        cvv=data['cvv'],
        expiration_date=card_expiry_date
    )

    serializer = PaymentCardSerializer(payment_card)

    return Response(serializer.data)


@api_view(['GET'])
def get_payment_cards(request):
    payment_cards = PaymentCard.objects.filter(
        user=request.user
    )
    
    serializer = PaymentCardSerializer(payment_cards, many=True)

    return Response(serializer.data)


