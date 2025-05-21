from django.urls import include, path

from . import views

urlpatterns = [
    path("register", views.register, name="register"),
    path("login", views.login, name="login"),
    path("users/", include("accounts.urls")),
    path("products/", include("products.urls")),
    path("payments/", include("payments.urls")),
    path("orders/", include("orders.urls")),
    path("categories/", include("categories.urls")),
    path("cart/", include("carts.urls")),
    path("addresses/", include("addresses.urls")),
]
