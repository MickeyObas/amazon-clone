from django.db import models


class Category(models.Model):
    title = models.CharField(max_length=150)
    parent = models.ForeignKey('self', on_delete=models.SET_NULL, blank=True, null=True, related_name='subcategories')

    class Meta:
        verbose_name_plural = "Categories"
        ordering = ['title']

    def __str__(self):
        return f"Parent: {self.parent.title if self.parent else None} ==> Self: {self.title}" 
    

class CategoryAttribute(models.Model):
    title = models.CharField(max_length=150)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.category.title} - {self.title}"


class ProductAttributeValue(models.Model):
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    attribute = models.ForeignKey(CategoryAttribute, on_delete=models.CASCADE)
    value = models.TextField()