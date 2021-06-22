from typing import Collection
from rest_framework import generics
from .serializers import SectionSerializer
from books.models import Section


class SectionListAPIView(generics.ListAPIView):
    permission_classes = []
    authentication_classes = []
    serializer_class = SectionSerializer

    def get_queryset(self):
        qs = Section.objects.all()
        return qs
