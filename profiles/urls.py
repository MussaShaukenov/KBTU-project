from django.urls import path
from .views import *


urlpatterns = [
    path('login/', user_login, name='login'),
    path('profiles/', ProfileList.as_view(), name='profiles'),
    path('profiles/<int:pk>/', ProfileDetail.as_view(), name='profile_edit'),
    path('logout/', LogoutView.as_view(), name='logout'),
]
