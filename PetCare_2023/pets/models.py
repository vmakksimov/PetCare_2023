from django.contrib.auth import get_user_model
from django.db import models

from PetCare_2023.common.validators import file_max_size_in_mb


# Create your models here.
UserModel = get_user_model()

class Users(models.Model):

    email = models.EmailField(
        null=True,
        blank=True,
        unique=True,
    )

    nickname = models.CharField(max_length=10, unique=True)
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=10)

    class Meta:
        verbose_name = 'User'
class Pet(models.Model):
    CAT = 'Cat'
    DOG = 'Dog'
    BUNNY = 'Bunny'
    PARROT = 'Parrot'
    FISH = 'Fish'
    OTHER = 'Other'
    TYPES = [(x, x) for x in (CAT, DOG, BUNNY, PARROT, FISH, OTHER)]

    MALE = 'Male'
    FEMALE = 'Female'

    GENDER = [(x, x) for x in (MALE, FEMALE)]

    name = models.CharField(max_length=20)
    age = models.IntegerField(
        blank=True,
        null=True,
    )

    image = models.ImageField(
        blank=True,
        null=True,
        upload_to='mediafiles/',
        validators= (file_max_size_in_mb, )
    )

    kind = models.CharField(
        max_length=max(len(x) for (x, _) in TYPES),
        choices=TYPES,
        null=True,
        blank=True,
    )

    gender = models.CharField(
        max_length=max(len(x) for (x, _) in TYPES),
        choices=GENDER,
        null=True,
    )

    owner = models.ForeignKey(
        UserModel,
        on_delete=models.CASCADE,
    )

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Pets'