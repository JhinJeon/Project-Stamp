from django.db import models
from django.conf import settings


# Create your models here.
# class Actor(models.Model):
#     name = models.CharField(max_length=100)

class Genre(models.Model):
    name = models.CharField(max_length=50)

class Movie(models.Model):
    genre_ids = models.ManyToManyField(Genre)
    overview = models.TextField()
    poster_path = models.TextField()
    release_date = models.DateTimeField()
    title = models.CharField(max_length=100)
    vote_average = models.FloatField()
    vote_count = models.IntegerField()
    like_users = models.ManyToManyField(settings.AUTH_USER_MODEL, related_name='like_reviews')


# class Review(models.Model):
#     title = models.CharField(max_length=100)
#     content = models.TextField()
#     movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    