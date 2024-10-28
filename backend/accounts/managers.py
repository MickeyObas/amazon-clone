from django.contrib.auth.base_user import BaseUserManager
from django.utils.translation import gettext_lazy as _

class CustomUserManager(BaseUserManager):
    def create_user(self, email=None, phone_number=None, password=None, **extra_fields):
        """
        Create and save a user with the given email and password.
        """
        if not email and not phone_number:
            raise ValueError(_("Either an email or phone number must be set"))
        
        if email:
            email = self.normalize_email(email)
            extra_fields['email'] = email

        if phone_number:
            extra_fields['phone_number'] = phone_number

        user = self.model(**extra_fields)
        user.set_password(password)
        user.save()
        return user

    def create_superuser(self, email=None, password=None, phone_number=None, **extra_fields):
        """
        Create and save a SuperUser with the given email and password.
        """
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(_("Superuser must have is_staff=True."))
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(_("Superuser must have is_superuser=True."))
        return self.create_user(email=email, phone_number=phone_number, password=password, **extra_fields)