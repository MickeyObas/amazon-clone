from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import (
    Product,
    ProductHighlight
)
from .serializers import (
    ProductSerializer,
    ProductHighlightSerializer
)


@api_view(['GET'])
def product_detail(request, pk):
    try:
        product = Product.objects.get(id=pk)
        serializer = ProductSerializer(product, context={'request': request})
    except product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    return Response(serializer.data)


@api_view(['GET'])
def product_list(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def product_highlight_list(request, pk):
    try:
        product = Product.objects.get(id=pk)
        product_highlights = product.highlights.all()
        serializer = ProductHighlightSerializer(product_highlights, many=True)
        return Response(serializer.data)
    except Product.DoesNotExist:
        return Response(f'Product with ID:{pk} does not exist', status=status.HTTP_404_NOT_FOUND)
