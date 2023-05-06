from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics as rest_views
from rest_framework import serializers
from rest_framework.utils import json

from PetCare_2023.pets.models import Pet


# Create your views here.
class PetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('name', 'image')

class PetsListView(rest_views.ListAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetsSerializer


class ImageViewSet(rest_views.ListAPIView):
    queryset = Pet.objects.all()
    serializer_class = ImageSerializer

    def post(self, request, *args, **kwargs):
        file = request.data['file']
        image = Pet.objects.create(image=file)
        return HttpResponse(json.dumps({'message': "Uploaded"}), status=200)