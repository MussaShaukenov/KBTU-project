from rest_framework import generics

from .models import Community, CommunityCategory
from .serializers import CommunitySerializer, CommunityCategorySerializer



class CommunityList(generics.ListCreateAPIView):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer


class CommunityDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Community.objects.all()
    serializer_class = CommunitySerializer


class CommunityCategoryList(generics.ListCreateAPIView):
    queryset = CommunityCategory.objects.all()
    serializer_class = CommunityCategorySerializer


class CommunityCategoryDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = CommunityCategory.objects.all()
    serializer_class = CommunityCategorySerializer
