from django.db import models


class Product(models.Model):
    title = models.CharField(max_length=255)
    picture = models.ImageField()
    description = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    quantity_in_stock = models.IntegerField()
    category = models.ForeignKey('categories.Category', related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    extra_attributes = models.JSONField(blank=True, null=True)
    # Physical attributes(Color, size, etc)

    def __str__(self):
        return f"{self.category}: {self.title}"


class ProductImage(models.Model):
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE)
    image = models.ImageField(upload_to='product_images/')
    alt_text = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f"Image for {self.product.title}"