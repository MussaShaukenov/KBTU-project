from django.db import models


class Trends(models.Model):
    name = models.CharField(max_length=100)
    category = models.CharField(max_length=100)
    number_of_tweets = models.IntegerField()

    def __str__(self):
        return self.name
