from django.shortcuts import render

from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Category
from .serializers import CategorySerializer


@api_view(['GET'])
def category_list(request):
    categories = Category.objects.filter(
        parent=None
    )
    serializer = CategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def category_detail(request, pk):
    try:
        category = Category.objects.get(id=pk)
        serializer = CategorySerializer(category)
        return Response(serializer.data)
    except Category.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)