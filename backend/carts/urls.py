from django.urls import path

from . import views

urlpatterns = [
    path('', views.cart, name='cart'),
    path('add/<int:product_id>/', views.add_to_cart, name='add_to_cart'),
    path('update/<int:item_id>/', views.update_cart, name='update_cart'),
    path('delete/<int:item_id>', views.delete_from_cart, name='delete_from_cart'),
    path('clear-cart', views.clear_cart, name='clear_cart')
]