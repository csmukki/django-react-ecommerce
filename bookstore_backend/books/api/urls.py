from django.urls import re_path
from .views import SectionListAPIView

urlpatterns = [
    re_path(r'^$', SectionListAPIView.as_view(), name="homepage"),
]
