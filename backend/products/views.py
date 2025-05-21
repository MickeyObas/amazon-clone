from django.db.models import Q
from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Brand, Product, ProductHighlight
from .serializers import (BrandSerializer, ProductHighlightSerializer,
                          ProductSerializer)


@api_view(["GET"])
def product_detail(request, pk):
    try:
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(product, context={"request": request})
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(serializer.data)


@api_view(["GET"])
def product_list(request):
    query = request.query_params.get("q", "").strip()
    category = request.query_params.get("c", "").strip()

    filters = Q()

    if query:
        filters |= (
            Q(title__icontains=query)
            | Q(description__icontains=query)
            | Q(category__title__icontains=query)
            | Q(attributes__value__icontains=query)
        )

    if category:
        filters |= Q(category__parent__title__iexact=category)

    products = Product.objects.filter(filters).distinct()

    serializer = ProductSerializer(products, many=True, context={"request": request})
    return Response(serializer.data)


@api_view(["GET"])
def product_highlight_list(request, pk):
    try:
        product = Product.objects.get(id=pk)
        product_highlights = product.highlights.all()
        serializer = ProductHighlightSerializer(product_highlights, many=True)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response(
            f"Product with ID:{pk} does not exist", status=status.HTTP_404_NOT_FOUND
        )


@api_view(["GET"])
def brand_list(request):
    brands = Brand.objects.all()
    serializer = BrandSerializer(brands, many=True)
    return Response(serializer.data)
