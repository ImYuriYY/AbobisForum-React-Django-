from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import *



class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['username', 'first_name', 'last_name', 'email', 'password']

    def create(self, validated_data):
        user = CustomUser.objects.create_user(
            username=validated_data['username'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            email=validated_data['email'],
            password=validated_data['password'],
            themes_count=0,
            messages_count=0,
        )

        return user
    


class UserSerializer(ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ['id', 'username', 'first_name', 'last_name', 'email', 'password', 'themes_count', 'messages_count', 'date_joined']

class ThemeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Theme
        fields = ('id', 'title', 'theme_owner', 'create_date')

class ThemeMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ThemeMessage
        fields = ('id', 'text', 'sender', 'theme', 'send_date')





