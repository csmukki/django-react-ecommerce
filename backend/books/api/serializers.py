from rest_framework import serializers
from books.models import Section


class SectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Section
        fields = [
            'id',
            'title',
            'image'
        ]
