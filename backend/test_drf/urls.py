from django.urls import path
from test_drf import views

urlpatterns = [

    path('tasks/', views.TaskView.as_view({'get':'list', 'post':'create'}), name="tasks"),
    path('task/<pk>/', views.TaskView.as_view({'get':'retrieve', 'put':'update', 'delete': 'destroy'}), name="task"),
    path('task-doneUndone/<pk>/', views.TaskView.as_view({'put': 'doneUndone'}), name='task-doneUndone'),
    
    #path('task-details/<pk>/', views.TaskView.as_view(), name="task-details"),
    #path('task-update/<pk>/', views.TaskView.as_view(), name='task-update'),
    #path('task-delete/<pk>/', views.TaskView.as_view(), name='task-delete'),
    

]