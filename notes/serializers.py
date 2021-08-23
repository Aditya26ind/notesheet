from django.db import connection, models
from django.db.models import fields
from rest_framework import serializers
from .models import notes_by_user,user_model
from drf_writable_nested import WritableNestedModelSerializer
class userNotesSerializer(serializers.ModelSerializer):
    class Meta:
        model=notes_by_user
        fields=["note"]
class user_all_dataSerializers(WritableNestedModelSerializer):
    notes=userNotesSerializer(many=True)
    class Meta:
        model=user_model
        fields=['id','username','dob',"phone","age",'notes']






