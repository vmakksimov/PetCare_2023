from django.urls import path

from PetCare_2023.pets.views import PetsListView, ImageViewSet

urlpatterns = (
    path('pets/', PetsListView.as_view(), name='api list pets'),
    # path('register/', RegisterUserView.as_view(), name='register'),
    path('upload/', ImageViewSet.as_view(), name='upload-image'),
)