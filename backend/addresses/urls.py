from django.urls import path

from . import views 


urlpatterns = [
    path('add', views.add_order_address, name='add_order_address')
]