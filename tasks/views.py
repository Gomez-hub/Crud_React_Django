from rest_framework import viewsets
from .serializers import TaskSerializer
from .models import Task

class TaskView(viewsets.ModelViewSet): #esto es lo que crea todo el crud
    serializer_class = TaskSerializer
    queryset = Task.objects.all()
