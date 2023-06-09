from django.urls import path

from PetCare_2023.pets.views import PetsListView, ImageViewSet, RegisterUserView, UserDetailAPI, RegisterUserAPIView

urlpatterns = (
    path('pets/', PetsListView.as_view(), name='api list pets'),
    path('register-first/', RegisterUserView.as_view(), name='register-first'),
    path('upload/', ImageViewSet.as_view(), name='upload-image'),
    path("get-details/",UserDetailAPI.as_view(), name='user details'),
    path('register/',RegisterUserAPIView.as_view(), name='register'),
)