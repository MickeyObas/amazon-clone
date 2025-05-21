from django.contrib import admin

from .models import PaymentCard


class PaymentCardModelAdmin(admin.ModelAdmin):
    pass


admin.site.register(PaymentCard, PaymentCardModelAdmin)
