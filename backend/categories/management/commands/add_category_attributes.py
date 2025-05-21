from django.core.management import BaseCommand

from ...models import Category, CategoryAttribute


class Command(BaseCommand):
    help = "Add attributes to respective categories"

    def handle(self, *args, **kwargs):
        category_attribute_map = {
            "Men's Shirts": [
                "Color",
                "Fabric",
                "Care Instructions",
                "Country of Origin",
            ]
        }

        try:
            for key, value in category_attribute_map.items():
                category = Category.objects.get(title=key)
                for attr in value:
                    CategoryAttribute.objects.create(
                        title=attr, category_id=category.id
                    )
            self.stdout.write(self.style.SUCCESS("Attributes added successfully!"))
        except Exception as e:
            self.stderr.write(e)
