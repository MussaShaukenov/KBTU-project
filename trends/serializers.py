from rest_framework.serializers import ModelSerializer

from trends.models import Trends


class TrendSerializer(ModelSerializer):
    class Meta:
        model = Trends
        fields = '__all__'
