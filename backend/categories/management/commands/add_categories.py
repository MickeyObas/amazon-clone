from typing import Any

from django.core.management import BaseCommand

from ...models import Category


class Command(BaseCommand):
    help = "Add categories to the database"

    def handle(self, *args, **kwargs):
        categories = [
            "Arts & Crafts",
            "Automotive",
            "Baby",
            "Beauty & Personal Care",
            "Books",
            "Boys' Fashion",
            "Computers",
            "Deals",
            "Digital Music",
            "Electronics",
            "Girls' Fashion",
            "Health & Household",
            "Home & Kitchen",
            "Industrial & Scientific",
            "Kindle Store",
            "Luggage",
            "Men's Fashion",
            "Movies & TV",
            "Music, CDs & Vinyl",
            "Pet Supplies",
            "Prime Video",
            "Software",
            "Sports & Outdoors",
            "Tools & Home Improvement",
            "Toys & Games",
            "Video Games",
            "Women's Fashion",
        ]
        for category_title in categories:
            Category.objects.get_or_create(title=category_title)
        self.stdout.write(self.style.SUCCESS("Categories added successfully"))
