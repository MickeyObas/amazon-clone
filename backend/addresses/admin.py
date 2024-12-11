from django.contrib import admin

from .models import Address


class AddressModelAdmin(admin.ModelAdmin):
    pass


admin.site.register(Address, AddressModelAdmin)
