from django.contrib import admin

from PetCare_2023.pets.models import Pet


# Register your models here.
@admin.register(Pet)
class PetAdmin(admin.ModelAdmin):
    # list_display = ('type', 'quantity')
    pass


