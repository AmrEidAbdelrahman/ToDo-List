from django.http import HttpResponse, JsonResponse, Http404
from django.views.decorators.csrf import csrf_exempt 
from django.shortcuts import render
from django.views import View

from rest_framework.decorators import api_view
from rest_framework.parsers import JSONParser
from rest_framework.response import Response

from rest_framework.views import APIView
from rest_framework import status
from rest_framework.viewsets import ModelViewSet
from rest_framework.decorators import action

from .serializers import TaskSerializer

from .models import Task


class TODO(View):
    def get(self, request, *args, **kwargs):
        tasks = Task.objects.all()
        context = {
            'tasks': tasks,
        }
        return render(request, 'test_drf/TODO.html', context)


class TaskView(ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    @action(detail=True, methods=['put'])
    def doneUndone(self, request, pk=None):
        print("#######doneUndone##########")
        task = self.get_object()
        print(task.done)
        task.done = not task.done
        print(task.done)
        task.save()
        return Response({"response":"works"}, status=200)

'''
class TaskList(APIView):
    def get(self, request, *args, **kwargs):
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TaskView(APIView):
    def get_task(self, pk):
        try:
            task = Task.objects.get(pk=pk)
            return task
        except Task.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        task = self.get_task(pk)
        serializer = TaskSerializer(task)
        return Response(serializer.data)

    def put(self, request, pk, format=None):
        task = self.get_task(pk=pk)
        serializer = TaskSerializer(instance=task, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)

    def delete(self, request, pk, format=None):
        task = Task.objects.get(pk=pk)
        task.delete()
        return Response()

'''
'''
@csrf_exempt
@api_view(("GET","POST",))
def task_list(request):
    """
    List all code snippets, or create a new snippet.
    """
    if request.method == 'GET':
        tasks = Task.objects.all()
        serializer = TaskSerializer(tasks, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = TaskSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)


@csrf_exempt
@api_view(("PUT",))
def task_update(request, pk):
    task = Task.objects.get(pk=pk)
    serializer = TaskSerializer(instance=task, data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    return Response(serializer.errors)


@csrf_exempt
@api_view(("PUT",))
def task_doneUndone(request, pk):
    task = Task.objects.get(pk=pk)
    task.done = not task.done
    task.save()
    return Response()


@api_view(("DELETE",))
def task_delete(request, pk):
    task = Task.objects.get(pk=pk)
    task.delete()
    return Response()
'''
