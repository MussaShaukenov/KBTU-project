from random import sample

from rest_framework import generics

from trends.models import Trends
from trends.serializers import TrendSerializer


class TrendListCreateView(generics.ListCreateAPIView):
    queryset = Trends.objects.all()
    serializer_class = TrendSerializer

    def get_queryset(self):
        # Get all trends, shuffle them randomly, and return the first 10
        queryset = Trends.objects.all().order_by('?')
        random_trends = sample(list(queryset), min(10, queryset.count()))
        return random_trends


class TrendRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Trends.objects.all()
    serializer_class = TrendSerializer
