from django.db import models
from .utils import (
    upload_section_image,
    upload_collection_image,
    SectionManager,
    CollectionManager
)


class Section(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(
        upload_to=upload_section_image, blank=True, null=True)
    objects = SectionManager()

    def __str__(self):
        return "{}".format(self.title)


class Collection(models.Model):
    section = models.ForeignKey(
        Section, related_name='collections', on_delete=models.CASCADE)
    image = models.ImageField(upload_to=upload_collection_image,
                              blank=True, null=True)
    name = models.CharField(max_length=200, blank=True, null=True)
    price = models.FloatField(default=3)
    objects = CollectionManager()

    def __str__(self):
        return "{}".format(self.name)
