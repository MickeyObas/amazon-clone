from django.urls import path, include

from . import views

urlpatterns = [
    path('', views.product_list, name='product_list'),
    path('<int:pk>/', views.product_detail, name='product_detail'),
    path('<int:pk>/highlights/', views.product_highlight_list, name='product_highlight_list'),
    path('<int:pk>/ratings/', include('ratings.urls'))
]