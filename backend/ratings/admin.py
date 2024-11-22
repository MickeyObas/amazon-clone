from django.contrib import admin

from .models import Rating


class RatingModelAdmin(admin.ModelAdmin):
    pass


admin.site.register(Rating, RatingModelAdmin)