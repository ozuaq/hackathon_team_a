from django.contrib import admin

from .models import TestMedia, TestArticle, TestTag


# Register your models here.
admin.site.register(TestMedia)
admin.site.register(TestTag)
admin.site.register(TestArticle)