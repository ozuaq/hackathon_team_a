from django.db import models
import uuid

# Create your models here.
def image_directory_path(instance, filename):
    return 'image/{}.{}'.format(str(uuid.uuid4()), filename.split('.')[-1])


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