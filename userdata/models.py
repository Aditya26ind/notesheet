from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser, PermissionsMixin
# Create your models here.
class user_model(AbstractUser):
    id = models.UUIDField(default=uuid.uuid4, unique=True,primary_key=True)
    age=models.CharField(max_length=200,blank=True)
    password=models.CharField(max_length=8,blank=True)
    dob=models.CharField(max_length=200,blank=True)
    phone=models.CharField(max_length=200,blank=True)
    def __str__(self):
        return self.username
