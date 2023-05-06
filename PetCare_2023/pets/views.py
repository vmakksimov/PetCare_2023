from django.shortcuts import render
from rest_framework import generics as rest_views
from rest_framework import serializers

from PetCare_2023.pets.models import Pet


# Create your views here.
class PetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'

class PetsListView(rest_views.ListAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetsSerializer