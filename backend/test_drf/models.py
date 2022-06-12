
from django.db import models


class Task(models.Model):
	content = models.CharField(max_length=200)
	created = models.DateTimeField(auto_now_add=True)
	done = models.BooleanField(default=False)


	def __str__(self):
		return f'{self.content} _id:{self.id}'
