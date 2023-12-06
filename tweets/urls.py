from django.urls import path
from .views import *

urlpatterns = [
    path('tweets/', TweetListCreateView.as_view(), name='tweet-list-create'),
    path('tweets/<int:pk>/', TweetRetrieveUpdateDestroyView.as_view(), name='tweet-detail'),
    path('tweets/user/<int:user_id>', get_user_tweets, name='user-tweet-list'),
    path('tweets/<int:pk>/comments/', CommentListCreateView.as_view(), name='tweet-comments'),
    path('comments/<int:pk>/', CommentRetrieveUpdateDestroyView.as_view(), name='comment-detail'),
]
