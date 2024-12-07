from django.db import models
from django.db.models import Count


class Product(models.Model):
    brand = models.ForeignKey('products.Brand', on_delete=models.SET_NULL, blank=True, null=True)
    title = models.CharField(max_length=255)
    picture = models.ImageField(upload_to='product_images')
    description = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    rating = models.DecimalField(max_digits=3, decimal_places=1, blank=True, null=True)
    quantity_in_stock = models.IntegerField(default=0)
    category = models.ForeignKey('categories.Category', related_name='products', on_delete=models.SET_NULL, null=True, blank=True)
    avg_rating = models.DecimalField(max_digits=2, decimal_places=1, default=0.0, blank=True, null=True)
    rating_count = models.PositiveIntegerField(default=0)
    # Physical attributes(Color, size, etc)
    extra_attributes = models.JSONField(blank=True, null=True)

    def get_star_ratings(self):
        
        ratings = (
            self.ratings.values('rating') 
            .annotate(count=Count('id'))  
        )

        ratings_total = self.ratings.count()
        
        ratings_dict = {star: 0 for star in range(1, 6)}
        for entry in ratings:
            ratings_dict[entry['rating']] = round((entry['count'] /ratings_total) * 100)
        
        return ratings_dict

    def __str__(self):
        return f"{self.category}: {self.title} - Stock[{self.quantity_in_stock}]"


class ProductAttributeValue(models.Model):
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE, related_name='attributes')
    attribute = models.ForeignKey('categories.CategoryAttribute', on_delete=models.CASCADE)
    value = models.TextField()

    class Meta:
        unique_together = ['product', 'attribute']

    def __str__(self):
        return f"Product ID: {self.product.id} {self.attribute.title}: {self.value}"


class ProductImage(models.Model):
    product = models.ForeignKey('products.Product', on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='product_images/')
    alt_text = models.CharField(max_length=100, null=True, blank=True)

    def __str__(self):
        return f"Image for {self.product.title}"
    

class ProductHighlight(models.Model):
    product = models.ForeignKey(Product, related_name='highlights', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, blank=True, null=True) 
    description = models.TextField()  # Required
    order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['order'] 
        

    def __str__(self):
        return f"{self.title + ": " if self.title else ""}{self.description[:30]}"
    

class Brand(models.Model):
    title = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='brands/', blank=True, null=True)
    website = models.URLField(blank=True, null=True)

    def __str__(self):
        return self.title