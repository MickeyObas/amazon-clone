from django.contrib import admin

from .models import Brand, Product, ProductAttributeValue, ProductHighlight


class ProductModelAdmin(admin.ModelAdmin):
    pass


class ProductHighlightModelAdmin(admin.ModelAdmin):
    pass


class ProductAttributeModelAdmin(admin.ModelAdmin):
    pass


class BrandModelAdmin(admin.ModelAdmin):
    pass


admin.site.register(Brand, BrandModelAdmin)
admin.site.register(Product, ProductModelAdmin)
admin.site.register(ProductHighlight, ProductHighlightModelAdmin)
admin.site.register(ProductAttributeValue, ProductAttributeModelAdmin)
