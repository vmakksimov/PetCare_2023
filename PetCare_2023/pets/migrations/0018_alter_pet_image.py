# Generated by Django 4.2 on 2023-06-27 00:29

import PetCare_2023.common.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0017_alter_pet_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='pet',
            name='image',
            field=models.ImageField(blank=True, default='', upload_to='mediafiles/', validators=[PetCare_2023.common.validators.file_max_size_in_mb]),
        ),
    ]
