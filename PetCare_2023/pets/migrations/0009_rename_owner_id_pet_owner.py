# Generated by Django 4.2 on 2023-06-26 02:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0008_rename_user_pet_owner_id'),
    ]

    operations = [
        migrations.RenameField(
            model_name='pet',
            old_name='owner_id',
            new_name='owner',
        ),
    ]
