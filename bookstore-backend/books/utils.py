from django.db import models


def upload_section_image(filename, instance):
    return "{}-{}".format(instance.title, filename)


class SectionManager(models.Manager):
    def all(self):
        qs = self.get_queryset()
        return qs


def upload_collection_image(filename, instance):
    return "collections/{}-{}".format(instance.name, filename)


class CollectionManager(models.Manager):
    def all(self):
        return self.get_queryset
