import re
from rest_framework import serializers

from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    name = serializers.CharField(write_only=True, required=True)
    mobile_no_or_email = serializers.CharField(write_only=True, required=True)

    def validate_name(self, value):
        parts = value.strip().split()
        self.first_name = parts[0]
        self.last_name = ' '.join(parts[1:]) if len(parts) > 1 else None
        return value
    
    def validate_mobile_no_or_email(self, value):
        email_pattern = r'^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$'
        phone_pattern = r'^\+?\d{10,15}$'

        self.email = None
        self.phone_number = None

        if re.match(email_pattern, value):
            self.email = value
        elif re.match(phone_pattern, value):
            self.phone_number = value
        else:
            return serializers.ValidationError("Enter a valid email address or phone number")

        return value

    def create(self, validated_data):

        validated_data.pop('name')
        validated_data.pop('mobile_no_or_email')


        validated_data['first_name'] = self.first_name      
        validated_data['last_name'] = self.last_name
        validated_data['email'] = self.email 
        validated_data['phone_number'] = self.phone_number     

        user = CustomUser.objects.create_user(
            email=validated_data.get('email', None),
            phone_number=validated_data.get('phone_number', None),
            password=validated_data['password'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name']
        )
        return user

    class Meta:
        model = CustomUser
        fields = ['id', 'password', 'name', 'email', 'mobile_no_or_email', 'phone_number', 'first_name', 'last_name']
        extra_kwargs = {
            'password': {'write_only': True},
            'mobile_no_or_email': {'write_only': True},
            'first_name': {'read_only': True},
            'last_name': {'read_only': True},
            'email': {'read_only': True},
            }