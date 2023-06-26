from django.http import HttpResponse
from django.shortcuts import render
from rest_framework import generics as rest_views, views as rest_logout_view, status
from rest_framework import serializers
from rest_framework.utils import json

from PetCare_2023.pets.models import Pet, Users

from rest_framework.permissions import AllowAny, IsAuthenticatedOrReadOnly
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import UserSerializer, RegisterSerializer
from django.contrib.auth.models import User
from rest_framework.authentication import TokenAuthentication
from rest_framework import generics
from rest_framework.permissions import BasePermission, IsAuthenticated, SAFE_METHODS
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from rest_framework.parsers import JSONParser, MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework.views import APIView

# Class based view to Get User Details using Token Authentication
# Class based view to register user

'''

SERIALIZERS

'''


# Create your views here.
class PetsSerializer(serializers.ModelSerializer):
    image_url = serializers.ImageField(required=False)
    class Meta:
        model = Pet
        fields = ('name', 'age', 'gender', 'kind', 'image_url', 'owner_id')


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)
    class Meta:
        model = Pet
        fields = ('name', 'image')


'''

API VIEWS

'''


class RegisterUserAPIView(generics.CreateAPIView):
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer





class LoginAPIView(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'accessToken': token.key,
            '_id': user.pk,
            'email': user.email,
            'username': user.username
        })


class LogOutAPIView(rest_logout_view.APIView):
    def get(self, request):
        return self.__perform_logout(request)

    def post(self, request):
        return self.__perform_logout(request)

    @staticmethod
    def __perform_logout(request):
        if request.user.is_anonymous:
            return Response({
                'message': 'no current logged in user'
            })

        request.user.auth_token.delete()
        return Response({
            'message': 'user logged out successfully'
        })


class ReadOnly(BasePermission):
    def has_permission(self, request, view):
        return request.method in SAFE_METHODS


class PetsListView(rest_views.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetsSerializer
    permission_classes = (AllowAny,)
    parser_classes = (MultiPartParser, JSONParser)

    # def get(self, request):
    #     return HttpResponse(request.data)
    #
    # def post(self, request):
    #     return HttpResponse(content_type='multipart/form-data')
    def post(self, request, *args, **kwargs):
        a = 5
        image = request.data['image']
        Pet.objects.create(image=image)
        return HttpResponse(content_type='multipart/form-data', status=200)

    # def perform_create(self, serializer):
    #     serializer.save(creator=self.request.user)




class UserViewSet(viewsets.ViewSet):
    """
    A simple ViewSet for listing or retrieving users.
    """

    def list(self, request):
        queryset = User.objects.all()
        serializer = UserSerializer(queryset, many=True)
        return Response(serializer.data)

    def retrieve(self, request, pk=None):
        queryset = User.objects.all()
        user = get_object_or_404(queryset, pk=pk)
        serializer = UserSerializer(user)
        return Response(serializer.data)


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
