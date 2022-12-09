from django.contrib import admin

from .models import TestMedia, TestArticle, TestTag, MapSpot


# Register your models here.
admin.site.register(TestMedia)
admin.site.register(TestTag)
admin.site.register(TestArticle)
admin.site.register(MapSpot)