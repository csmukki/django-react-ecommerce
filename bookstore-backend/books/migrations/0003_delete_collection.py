# Generated by Django 3.2.4 on 2021-06-18 16:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('books', '0002_collection'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Collection',
        ),
    ]