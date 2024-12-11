from rest_framework import serializers

from . models import Address


class AddressSerializer(serializers.ModelSerializer):
    user_name = serializers.SerializerMethodField(read_only=True)

    def get_user_name(self, obj):
        return f"{obj.user.first_name} {obj.user.last_name if obj.user.last_name else ''}"

    class Meta:
        model = Address
        fields = [
            'user_name',
            'street_address',
            'building_address',
            'city',
            'state',
            'zip_code',
            'country',
            'phone',
            'is_default',
            'delivery_instructions'
        ]