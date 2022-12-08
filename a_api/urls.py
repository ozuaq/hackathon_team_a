from django.urls import path

from . import views


app_name = 'a_api'

urlpatterns = [
    path('test_articles/', views.test_article_list),
]