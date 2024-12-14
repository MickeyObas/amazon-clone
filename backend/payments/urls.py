from django.urls import path

from . import views


urlpatterns = [
    path('get-payment-cards', views.get_payment_cards, name='get_payment_cards'),
    path('add-card', views.add_card, name='add-card'),
    path('create-payment-intent', views.create_payment_intent, name='create-payment-intent')
]