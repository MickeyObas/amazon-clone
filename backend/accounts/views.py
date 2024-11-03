from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from django.db.models import Q

from .models import CustomUser
from .serializers import UserSerializer


@api_view(['GET'])
def users_list(request):
    users = CustomUser.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['GET'])
def user_detail(request, pk):
    try:
        user = CustomUser.objects.get(id=pk)
    except CustomUser.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    serializer = UserSerializer(user)
    return Response(serializer.data, status=status.HTTP_200_OK)

@api_view(['POST'])
def check_user(request):

    email_or_phone = request.data.get('phoneOrEmail')

    if not email_or_phone:
        return Response({'phoneOrEmail': 'Email or phone number must be provided'})
    
    try:
        user = CustomUser.objects.get(
            Q(email=email_or_phone) | Q(phone_number=email_or_phone)
        )
    except CustomUser.DoesNotExist:
        return Response({'userExists': False})
    
    return Response({'userExists': True})
    