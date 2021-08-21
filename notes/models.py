#from backdata.userdata.models import user_model
from userdata.models import user_model
from django.db import models
from django.db.models.fields import CharField
# Create your models here.
class notes_by_user(models.Model):
    userNotes=models.ForeignKey(user_model,on_delete=models.CASCADE,related_name="notes",blank=False)
    id = models.UUIDField(primary_key=True, unique=True)
    note=models.CharField(max_length=500,blank=False)
    def __str__(self):
        return self.note