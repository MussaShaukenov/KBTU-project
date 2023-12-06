from rest_framework import serializers
from .models import Community, CommunityCategory


class CommunitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Community
        fields = "__all__"

    def to_representation(self, instance):
        representation = super(CommunitySerializer, self).to_representation(instance)
        representation['number_of_posts'] = self.format_number_of_posts(instance)
        representation['created_at'] = instance.created_at.strftime("%d.%m.%Y")
        representation['category'] = instance.category.name
        representation['members'] = instance.members.count()
        return representation

    def format_number_of_posts(self, instance):
        if 1_000_000 > instance.number_of_posts > 1000:
            formatted_number_of_posts = f"{instance.number_of_posts // 1000}K"
            return formatted_number_of_posts
        elif instance.number_of_posts > 1_000_000:
            formatted_number_of_posts = f"{instance.number_of_posts // 1_000_000}M"
            return formatted_number_of_posts
        else:
            return instance.number_of_posts if instance.number_of_posts else 0


class CommunityCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = CommunityCategory
        fields = "__all__"