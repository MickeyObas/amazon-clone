from django.contrib import admin
from . models import Category

class CategoryModelAdmin(admin.ModelAdmin):
    pass

admin.site.register(Category, CategoryModelAdmin)
