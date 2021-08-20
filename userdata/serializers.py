
from django.contrib.auth.hashers import make_password
from django.db import models
from django.db.models import fields
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import user_model
from django.contrib.auth.forms import UserCreationForm
from django.http import JsonResponse
from django.forms.models import model_to_dict



class user_model_serializers(UserCreationForm):
    class Meta:
        model=user_model

        fields = ('id', 'username','password', 'email',"dob",'phone',"age")
        extra_kwargs={'password': {'write_only': True}}
        def create(self, validated_data):
            user = user_model.objects.create_user(**validated_data)
            return user