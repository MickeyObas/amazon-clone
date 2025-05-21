from django.urls import path

from . import views

urlpatterns = [
    path("", views.get_user_addresses, name="get_user_addresses"),
    path("add", views.add_order_address, name="add_order_address"),
    path("get-order-address", views.get_order_address, name="get_order_address"),
]
