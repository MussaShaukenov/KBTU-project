from rest_framework import serializers
from .models import Tweet, Comment
from profiles.models import Profile
from profiles.serializers import ProfileSerializer


class CommentSerializer(serializers.ModelSerializer):
    user = serializers.PrimaryKeyRelatedField(queryset=Profile.objects.all())
    tweet = serializers.PrimaryKeyRelatedField(queryset=Tweet.objects.all())

    class Meta:
        model = Comment
        fields = ['id', 'user', 'tweet', 'content', 'created_at']

    def create(self, validated_data):
        user = validated_data.pop('user')
        tweet = validated_data.pop('tweet')
        comment = Comment.objects.create(user=user, tweet=tweet, **validated_data)
        return comment


class TweetSerializer(serializers.ModelSerializer):
    comments = CommentSerializer(many=True, source='comment_set', read_only=True)
    user = ProfileSerializer()

    class Meta:
        model = Tweet
        fields = ['id', 'user', 'content', 'created_at', 'comments']

    def create(self, validated_data):
        user = validated_data.pop('user')
        tweet = Tweet.objects.create(user=user, **validated_data)
        return tweet

    def to_representation(self, instance):
        representation = super(TweetSerializer, self).to_representation(instance)
        representation['created_at'] = instance.created_at.strftime("%d.%m.%Y")
        return representation
