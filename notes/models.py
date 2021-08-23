#from backdata.userdata.models import user_model
from userdata.models import user_model
from django.db import models
from django.db.models.fields import CharField
import uuid
# Create your models here.
class notes_by_user(models.Model):
    userNotes=models.ForeignKey(user_model ,on_delete=models.CASCADE,related_name="notes",blank=False)
    id = models.UUIDField(default=uuid.uuid4,unique=True,primary_key=True)
    note=models.CharField(max_length=500,blank=False)
    def __str__(self):
        return self.note