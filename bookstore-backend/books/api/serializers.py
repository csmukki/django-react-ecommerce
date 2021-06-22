from rest_framework import serializers
from books.models import Section, Collection


class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = [
            'id',
            'name',
            'image',
            'price'
        ]


class SectionSerializer(serializers.ModelSerializer):
    # collections = CollectionSerializer(read_only=True)

    class Meta:
        model = Section
        fields = [
            'id',
            'title',
            'image',
        ]
