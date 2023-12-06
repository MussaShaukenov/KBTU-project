from django.contrib.auth.hashers import make_password
from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = Profile
        fields = '__all__'

    def to_representation(self, instance):
        representation = super(ProfileSerializer, self).to_representation(instance)
        representation['created_at'] = instance.created_at.strftime("%d.%m.%Y")
        return representation

    def create(self, validated_data):
        validated_data['password'] = make_password(validated_data['password'])
        return super(ProfileSerializer, self).create(validated_data)

    def update(self, instance, validated_data):
        if 'password' in validated_data:
            validated_data['password'] = make_password(validated_data['password'])
        return super(ProfileSerializer, self).update(instance, validated_data)