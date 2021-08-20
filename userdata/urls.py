from django.urls import path
from .views import  MyUserCreate, UserRetrive

urlpatterns = [
    path('posttt/',MyUserCreate.as_view() ),
    path("posttt/<str:username>/",MyUserCreate.as_view()),
    path("alluser/",UserRetrive),
]