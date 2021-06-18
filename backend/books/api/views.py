from rest_framework import generics
from .serializers import SectionSerializer
from books.models import Section


class SectionListAPIView(generics.ListAPIView):
    permission_classes = []
    authentication_classes = []
    serializer_class = SectionSerializer
    queryset = Section.objects.all()
