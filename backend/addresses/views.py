import json

from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from orders.models import Order

from .models import Address
from .serializers import AddressSerializer


@api_view(["POST"])
def add_order_address(request):
    data = json.loads(request.body)
    action = data["action"]

    user = request.user
    street_address = data["streetAddress"]
    building_address = data["buildingAddress"]
    city = data["city"]
    state = data["state"]
    zipcode = data["zipCode"]
    country = data["country"]
    phone = data["phone"]
    is_default = data["isDefault"]

    # User attempting to save already existing address
    if Address.objects.filter(user=user, street_address=street_address).exists():
        return Response(
            {"message": "You have already added this address."},
            status=status.HTTP_409_CONFLICT,
        )

    address = Address.objects.create(
        user=user,
        street_address=street_address,
        building_address=building_address,
        city=city,
        state=state,
        zip_code=zipcode,
        country=country,
        phone=phone,
        is_default=is_default,
    )

    # Use new address to initiate order
    Order.objects.create(user=user, address=address)

    serializer = AddressSerializer(address)

    return Response(serializer.data)


@api_view(["GET"])
def get_user_addresses(request):
    user_addresses = Address.objects.filter(user=request.user)

    serializer = AddressSerializer(user_addresses, many=True)

    return Response(serializer.data)


@api_view(["GET"])
def get_order_address(request):
    if not request.user.is_authenticated:
        return Response(status=status.HTTP_401_UNAUTHORIZED)

    pending_order = Order.objects.filter(user=request.user, status="PENDING")

    if not pending_order.exists():
        return Response(status=status.HTTP_404_NOT_FOUND)

    serializer = AddressSerializer(pending_order.first().address)

    return Response(serializer.data)
