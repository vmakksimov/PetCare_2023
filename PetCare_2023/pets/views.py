from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics as rest_views, permissions, status
from rest_framework import serializers
from rest_framework.utils import json

from PetCare_2023.pets.models import Pet, Users

from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer,RegisterSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS

# Class based view to Get User Details using Token Authentication
class UserDetailAPI(APIView):
  authentication_classes = (TokenAuthentication,)
  permission_classes = (AllowAny,)
  def get(self,request,*args,**kwargs):
    user = User.objects.get(id=request.user.id)
    serializer = UserSerializer(user)
    return Response(serializer.data)

#Class based view to register user
class RegisterUserAPIView(generics.CreateAPIView):
  permission_classes = (AllowAny,)
  serializer_class = RegisterSerializer

'''

SERIALIZERS

'''
# Create your views here.
class PetsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = '__all__'
class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'
class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pet
        fields = ('name', 'image')
'''

API VIEWS

'''

class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS
class PetsListView(rest_views.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetsSerializer
    permission_classes = (AllowAny,)



class RegisterUserView(rest_views.ListCreateAPIView):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class ImageViewSet(rest_views.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = ImageSerializer

    def post(self, request, *args, **kwargs):
        file = request.data['file']
        image = Pet.objects.create(image=file)
        return HttpResponse(json.dumps({'message': "Uploaded"}), status=200)