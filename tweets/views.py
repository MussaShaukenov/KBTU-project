from rest_framework import generics
from rest_framework.decorators import action, api_view
from rest_framework.response import Response
from django.db.models import Q
from .models import Tweet, Comment
from .serializers import TweetSerializer, CommentSerializer


class TweetListCreateView(generics.ListCreateAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()

        search_query = request.query_params.get('search', None)
        if search_query:
            queryset = queryset.filter(
                Q(content__icontains=search_query) | 
                Q(user__username__icontains=search_query)
            )

        serializer = TweetSerializer(queryset, many=True)
        return Response(serializer.data)


    @action(detail=False, methods=['get'])
    def list_by_user_id(self, request):
        queryset = Tweet.objects.filter(user=request.user)
        serializer = TweetSerializer(queryset, many=True)
        return Response(serializer.data)


class TweetRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Tweet.objects.all()
    serializer_class = TweetSerializer


class CommentListCreateView(generics.ListCreateAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


class CommentRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer


@api_view(['GET'])
def get_user_tweets(request, user_id: int):
    queryset = Tweet.objects.filter(user=user_id)
    serializer = TweetSerializer(instance=queryset, many=True)
    return Response(serializer.data)
