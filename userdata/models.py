from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser, PermissionsMixin
# Create your models here.
class user_model(AbstractUser):
    age=models.CharField(max_length=200,blank=True)
    password=models.CharField(max_length=800,blank=True)
    dob=models.CharField(max_length=200,blank=True)
    phone=models.CharField(max_length=200,blank=True)
    def __str__(self):
        return self.username

