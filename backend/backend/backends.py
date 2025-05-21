from typing import Any

from django.contrib.auth.backends import ModelBackend
from django.db.models import Q

from accounts.models import CustomUser


class CustomUserBackend(ModelBackend):
    def authenticate(self, request, email_or_phone=None, password=None, **kwargs):
        try:
            user = CustomUser.objects.get(
                Q(email=email_or_phone) | Q(phone_number=email_or_phone)
            )
        except CustomUser.DoesNotExist:
            return None

        if user.check_password(password):
            return user
        return None
