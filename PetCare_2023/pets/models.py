from django.db import models

from PetCare_2023.common.validators import file_max_size_in_mb


# Create your models here.

class Users(models.Model):

    name = models.CharField(max_length=20)
    email = models.EmailField(
        null=True,
        blank=True,
        unique=True,
    )

    nickname = models.CharField(max_length=10, unique=True)
    first_name = models.CharField(max_length=10)
    last_name = models.CharField(max_length=10)
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
        null=True,
        blank=True,
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

    def __str__(self):
        return self.name