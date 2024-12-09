from django.contrib import admin

from .models import (
    Order,
    OrderItem
)

class OrderModelAdmin(admin.ModelAdmin):
    pass

class OrderItemModelAdmin(admin.ModelAdmin):
    pass


admin.site.register(Order, OrderModelAdmin)
admin.site.register(OrderItem, OrderItemModelAdmin)
