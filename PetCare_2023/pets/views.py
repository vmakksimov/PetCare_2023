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
    image = serializers.ImageField(required=False)

    class Meta:
        model = Pet
        fields = '__all__'


class UsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(max_length=None, use_url=True, allow_null=True, required=False)

    class Meta:
        model = Pet
        fields = ('name', 'age', 'kind', 'gender', 'image', 'user',)


'''

API VIEWS

'''


class RegisterUserAPIView(generics.CreateAPIView):
    permission_classes = (AllowAny,)

    a = 5
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


class PetsListView(APIView):
    queryset = Pet.objects.all()
    serializer_class = PetsSerializer
    permission_classes = (AllowAny,)
    parser_classes = [MultiPartParser, JSONParser, FormParser]

    def pre_save(self, obj):
        obj.image = self.request.FILES.get('file')

    def get(self, request, *args, **kwargs):
        posts = Pet.objects.all()
        serializer = PetsSerializer(posts, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        serializer_class = PetsSerializer(data=request.data)
        a = 5
        if serializer_class.is_valid():
            serializer_class.save()

            return Response({'status': 'ok'}, status=200)

        else:
            return Response({'error': serializer_class.errors}, status=400)

    # def post(self, request):
    #     serializer = ImageSerializer(data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     else:
    #         return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def get(self, request, *args, **kwargs):
    #     posts = Pet.objects.all()
    #     serializer = PetsSerializer(posts, many=True)
    #     return Response(serializer.data)

    #
    # return HttpResponse(content_type='multipart/form-data', status=200)


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


class GetPetsView(rest_views.ListCreateAPIView):
    queryset = Pet.objects.all()
    serializer_class = PetsSerializer
