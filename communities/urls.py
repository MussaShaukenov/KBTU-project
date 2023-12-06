from django.urls import path
from .views import *


urlpatterns = [
    path('communities/', CommunityList.as_view(), name='communities'),
    path('communities/<int:pk>/', CommunityDetail.as_view(), name='communities-edit'),
    path('communities/categories/', CommunityCategoryList.as_view(), name='communities-categories'),
    path('communities/categories/<int:pk>/', CommunityCategoryDetail.as_view(), name='communities-categories-edit'),
]
