from django.urls import path

from . import views

app_name = 'a_app'

urlpatterns = [
    path('freedom/', views.freedom_view, name='freedom_view')
]