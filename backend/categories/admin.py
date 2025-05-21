from django.contrib import admin

from .models import Category, CategoryAttribute


class CategoryModelAdmin(admin.ModelAdmin):
    pass


class CategoryAttributeModelAdmin(admin.ModelAdmin):
    pass


admin.site.register(Category, CategoryModelAdmin)
admin.site.register(CategoryAttribute, CategoryAttributeModelAdmin)
