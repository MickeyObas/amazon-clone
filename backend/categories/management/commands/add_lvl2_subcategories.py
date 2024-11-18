from django.core.management import BaseCommand
from ...models import Category


class Command(BaseCommand):
    help = "Add second level subcategories"

    def handle(self, *args, **kwargs):
        sub_sub_category_map = {
            "Men's Fashion": [
                "Men's Shirts",
                "Men's Shorts",
                "Men's Pants",
                "Men's Jeans"
            ]
        }
        
        try:
            for key, value in sub_sub_category_map.items():
                parent_category = Category.objects.get(
                    title=key
                )
                for subcategory_title in value:
                    Category.objects.get_or_create(
                        title=subcategory_title,
                        parent_id=parent_category.id
                    )
            self.stdout.write(self.style.SUCCESS('Categories added successfully'))
        except Exception as e:
            print(key, value)
            print(e)

