from django.urls import path

from . import views

urlpatterns = [
    path('', views.product_ratings_list, name='product_ratings_list')
]