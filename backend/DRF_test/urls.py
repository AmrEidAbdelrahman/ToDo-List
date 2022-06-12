from django.contrib import admin
from django.urls import path, include
from test_drf.views import TODO

urlpatterns = [
    path('admin/', admin.site.urls),
    
    path('api/', include('test_drf.urls')),

    path('to-do/', TODO.as_view(), name='home-page'),
]