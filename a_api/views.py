from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from a_app.models import TestArticle
from .serializers import TestArticleSerializer


@csrf_exempt
def test_article_list(request):
    if request.method == 'GET':
        test_articles = TestArticle.objects.all()
        serializer = TestArticleSerializer(test_articles, many=True)
        return JsonResponse(serializer.data, safe=False)
    
    elif request.method == 'POST':
        data = JSONParser().parse(request)
        serializer = TestArticleSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors, status=400)