from django.urls import path

from PetCare_2023.pets.views import PetsListView, ImageViewSet, RegisterUserView, UserDetailAPI, RegisterUserAPIView, \
    LoginAPIView, LogOutAPIView, UserViewSet

urlpatterns = (
    path('pets/', PetsListView.as_view(), name='pets'),
    path('register-first/', RegisterUserView.as_view(), name='register-first'),
    path('upload/', ImageViewSet.as_view(), name='upload-image'),
    path('get-details/',UserDetailAPI.as_view(), name='user details'),
    path('register/',RegisterUserAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogOutAPIView.as_view(), name='logout'),


    path('users-view', UserViewSet.as_view({'get': 'list'}), name='users view'),

)