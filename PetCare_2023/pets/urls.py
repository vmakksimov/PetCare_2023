from django.urls import path

from PetCare_2023.pets.views import PetsListView, RegisterUserView, RegisterUserAPIView, \
    LoginAPIView, LogOutAPIView, UserViewSet, GetPetsView

urlpatterns = (
    path('create-pet/', PetsListView.as_view(), name='pets'),
    path('register-first/', RegisterUserView.as_view(), name='register-first'),
    path('pets-details/', GetPetsView.as_view(), name='pets detail'),
    path('register/',RegisterUserAPIView.as_view(), name='register'),
    path('login/', LoginAPIView.as_view(), name='login'),
    path('logout/', LogOutAPIView.as_view(), name='logout'),


    path('users-view', UserViewSet.as_view({'get': 'list'}), name='users view'),

)