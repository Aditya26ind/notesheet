import json
from django.core import serializers
from django.db import models
from django.forms.models import model_to_dict
from django.http.response import JsonResponse
from django.shortcuts import render
from .models import user_model
from .serializers import user_model_serializers
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication


class MyUserCreate(APIView):
    def post(self, request):
        serializer =user_model_serializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    @permission_classes([IsAuthenticated])
    @authentication_classes([JWTAuthentication])
    def get(self,request,username):
        user_dts = user_model.objects.filter(username=username)
        serializer = user_model_serializers(user_dts)
        model_to_dict=[ {"username":model["username"],"id":model["id"]}for model in serializer.data.values()]
        return Response(model_to_dict)
            
@api_view(["POST","GET","DELETE"])
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def UserRetrive(request):
    if request.method=="GET":
        usersPresent=user_model.objects.all()
        serializer=user_model_serializers(usersPresent)
        model_to_dict=[ {"username":model["username"]}for model in serializer.data.values()]
        return Response( model_to_dict)
    else:
        return Response("Not allowed")