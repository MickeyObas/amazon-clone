from django.urls import path

from . import views


urlpatterns = [
    path('get_pending_order', views.get_pending_order, name='get_pending_order'),
    path('generate-order-items', views.generate_order_items, name='generate_order_items'),
    path('order-status-change', views.change_order_status, name='order-status-change')
]