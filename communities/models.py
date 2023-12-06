from django.db import models
import sys


class CommunityCategory(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'community_categories'
        verbose_name = 'community category'
        verbose_name_plural = 'community categories'


class Community(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    members = models.ManyToManyField('profiles.Profile', related_name='communities')
    is_private = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    number_of_posts = models.IntegerField(default=0)
    image = models.CharField(null=True)
    category = models.ForeignKey(CommunityCategory, on_delete=models.CASCADE, related_name='communities', null=True)

    def __str__(self):
        return self.name

    class Meta:
        db_table = 'communities'
        verbose_name = 'community'
        verbose_name_plural = 'communities'