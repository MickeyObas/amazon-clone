import json

from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from products.models import Product

from .models import Rating
from .serializers import RatingSerializer


@api_view(["GET"])
def product_ratings_list(request, pk):
    try:
        product = Product.objects.get(id=pk)
        product_ratings = product.ratings.all()
        serializer = RatingSerializer(product_ratings, many=True)
        return Response(serializer.data)
    except Product.DoesNotExist:
        print("Doesnt exist")
        return Response(status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
# TODO: Implement
def product_rating_add(request, pk):
    try:
        product = Product.objects.get(id=pk)
        user = request.user
        rating = request.data["rating"]
        review = request.data["review"]
        heading = request.data["heading"]
    except:
        pass
