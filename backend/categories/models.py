from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=150)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, blank=True, null=True, related_name='subcategories')

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['title']

    def __str__(self):
        return self.title 