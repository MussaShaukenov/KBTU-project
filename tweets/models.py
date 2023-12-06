from django.db import models


class Tweet(models.Model):
    user = models.ForeignKey('profiles.Profile', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return "User" + self.user.username + "Content: " + self.content[:50]

    class Meta:
        db_table = 'tweets'


class Comment(models.Model):
    tweet = models.ForeignKey('Tweet', on_delete=models.CASCADE)
    user = models.ForeignKey('profiles.Profile', on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return "User" + self.user.username + "Content: " + self.content[:50]

    class Meta:
        db_table = 'comments'
