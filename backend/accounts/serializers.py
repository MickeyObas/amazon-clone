from rest_framework import serializers

from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    name = serializers.CharField(write_only=True, required=True)

    def validate_name(self, value):
        parts = value.strip().split()
        self.first_name = parts[0]
        self.last_name = ' '.join(parts[1:]) if len(parts) > 1 else None
        return value

    def create(self, validated_data):

        validated_data.pop('name')
        validated_data['first_name'] = self.first_name      
        validated_data['last_name'] = self.last_name      

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
        fields = ['id', 'password', 'name', 'email', 'phone_number', 'first_name', 'last_name']
        extra_kwargs = {
            'password': {'write_only': True},
            'first_name': {'read_only': True},
            'last_name': {'read_only': True}
            }