from django.urls import path, include

from . import views

urlpatterns = [
    path('register', views.register, name='register'),
    path('login', views.login, name='login'),
    path('users/', include('accounts.urls')),
    path('products/', include('products.urls')),
    path('categories/', include('categories.urls'))
]