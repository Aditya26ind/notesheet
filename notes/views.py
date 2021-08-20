from django.http import response
from django.shortcuts import render
from rest_framework.decorators import api_view,permission_classes,authentication_classes
from .serializers import userNotesSerializer, user_all_dataSerializers
from rest_framework.response import Response
from .models import notes_by_user,user_model
from django.db.models import Exists, OuterRef ,Subquery
from django.contrib.auth import authenticate
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

# Create your views here.
@api_view(["POST","GET","DELETE"])
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def Note_retrive(request,pk):
    if request.method=="POST":
        if user_model.objects.filter(id=pk).exists():
            datas=notes_by_user.objects.create(userNotes_id=pk, note=request.data["note"])
            serializer=userNotesSerializer(data=datas)
            if serializer.is_valid():
                serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
    if  request.method=="GET":
        dts2=notes_by_user.objects.filter(userNotes_id=pk)
        serializer=userNotesSerializer(dts2,context={'request': request} ,many=True)
        return Response(serializer.data)
@api_view(["POST","GET","DELETE"])
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def noteUpdate(request,pk,pk2):
    if request.method=="POST":
        update_this_note=notes_by_user.objects.filter(userNotes_id=pk).filter(id=pk2).update(note=request.data["note"])
        serializer=userNotesSerializer(data=update_this_note)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)
@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
@authentication_classes([JWTAuthentication])
def delete_note(request,pk,pk2):
    if request.method=="DELETE":
            to_delete=notes_by_user.objects.filter(userNotes_id=pk).filter(id=pk2).delete()
            return Response('deleted')

