from django.db import models

from PetCare_2023.common.validators import file_max_size_in_mb


# Create your models here.

class Pet(models.Model):
    CAT = 'Cat'
    DOG = 'Dog'
    BUNNY = 'Bunny'
    PARROT = 'Parrot'
    FISH = 'Fish'
    OTHER = 'Other'
    TYPES = [(x, x) for x in (CAT, DOG, BUNNY, PARROT, FISH, OTHER)]

    name = models.CharField(max_length=20)
    age = models.IntegerField(
        blank=True,
        null=True,
    )

    image = models.ImageField(
        null=True,
        blank=True,
        validators= (file_max_size_in_mb, )
    )

    kind = models.CharField(
        max_length=max(len(x) for (x, _) in TYPES),
        choices=TYPES,
        null=True,
        blank=True,
    )