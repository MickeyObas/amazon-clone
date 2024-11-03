from django.urls import path

from . import views 

urlpatterns = [
    path('', views.users_list, name='users_list'),
    path('<int:pk>', views.user_detail, name='user_detail'),
    path('check-user', views.check_user, name='check_user')
]