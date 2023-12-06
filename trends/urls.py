from django.urls import path
from .views import *

urlpatterns = [
    path('trends/', TrendListCreateView.as_view(), name='trend-list-create'),
    path('trends/<int:pk>/', TrendRetrieveUpdateDestroyView.as_view(), name='trend-detail'),
]