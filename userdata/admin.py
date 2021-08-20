from django.contrib import admin
from .models import user_model
# Register your models here.
class user_modelAdmin(admin.ModelAdmin):
    model = user_model

admin.site.register(user_model,user_modelAdmin)
