# Generated by Django 4.2 on 2023-06-26 02:48

import PetCare_2023.common.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0009_rename_owner_id_pet_owner'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='image',
            field=models.ImageField(upload_to='mediafiles/', validators=[PetCare_2023.common.validators.file_max_size_in_mb]),
        ),
    ]
