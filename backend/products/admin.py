from django.contrib import admin

from .models import (
    Product, 
    ProductHighlight,
    ProductAttributeValue
    )


class ProductModelAdmin(admin.ModelAdmin):
    pass

class ProductHighlightModelAdmin(admin.ModelAdmin):
    pass

class ProductAttributeModelAdmin(admin.ModelAdmin):
    pass

admin.site.register(Product, ProductModelAdmin)
admin.site.register(ProductHighlight, ProductHighlightModelAdmin)
admin.site.register(ProductAttributeValue, ProductAttributeModelAdmin)
