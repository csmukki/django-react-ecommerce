from django.db import models


def upload_section_image(filename, instance):
    return "{i}-{f}".format(i=instance.title, f=filename)


class SectionManager(models.Manager):
    def all(self):
        qs = self.get_queryset()
        return qs


class Section(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(
        upload_to=upload_section_image, blank=True, null=True)
    objects = SectionManager()

    def __str__(self):
        return "{}".format(self.title)
