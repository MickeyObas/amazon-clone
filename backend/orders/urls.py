from django.urls import path

from . import views


urlpatterns = [
    path('get_pending_order', views.get_pending_order, name='get_pending_order')
]