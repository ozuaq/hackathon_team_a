from django.db import models
import uuid

# Create your models here.
def image_directory_path(instance, filename):
    return 'image/{}.{}'.format(str(uuid.uuid4()), filename.split('.')[-1])

class MapSpot(models.Model):
    lat = models.FloatField(max_length=100)
    lng = models.FloatField(max_length=100)
    name = models.CharField(max_length=100)
    content = models.CharField(max_length=500)
    image = models.ImageField(upload_to=image_directory_path)

class TestMedia(models.Model):
    image = models.ImageField(upload_to=image_directory_path)

class TestTag(models.Model):
    tag = models.CharField(max_length=20)
    
    def __str__(self) -> str:
        return self.tag

class TestArticle(models.Model):
    title = models.CharField(max_length=200)
    tags = models.ManyToManyField(TestTag, blank=True)
    
    def __str__(self) -> str:
        return self.title