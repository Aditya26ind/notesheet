from django.urls import path
from .views import Note_retrive, delete_note, noteUpdate
urlpatterns=[
    path('<int:pk>/',Note_retrive),
    path('delete/<int:pk>/<int:pk2>/',delete_note),
    path('update/<int:pk>/<int:pk2>/',noteUpdate)
]