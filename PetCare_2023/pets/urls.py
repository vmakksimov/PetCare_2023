from django.urls import path

from PetCare_2023.pets.views import PetsListView

urlpatterns = (
    path('pets/', PetsListView.as_view(), name='api list pets'),
)