from rest_framework import serializers

from a_app.models import TestArticle, TestTag


class TestTagSerializer(serializers.ModelSerializer):
    class Meta:
        model = TestTag
        fields = '__all__'
        
class TestArticleSerializer(serializers.ModelSerializer):
    tags = TestTagSerializer(many=True)
    
    class Meta:
        model = TestArticle
        fields = '__all__'
    
    def create(self, validated_data):
        test_article = TestArticle.objects.create(
            title = validated_data["title"],
        )
        test_article.save()

        for tag in validated_data["tags"]:
            tag_obj = TestTag.objects.get_or_create(tag=tag["tag"])
            # print(tag_obj)
            test_article.tags.add(tag_obj[0])
        
        return test_article
    
    def update(self, instance, validated_data):
        instance.title = validated_data["title"]
        instance.save()
        
        test_article = TestArticle.objects.get(id=instance.id)
        test_article.tags.clear()
        
        for tag in validated_data["tags"]:
            tag_obj = TestTag.objects.get_or_create(tag=tag["tag"])
            instance.tags.add(tag_obj[0])
        
        return instance
        
            