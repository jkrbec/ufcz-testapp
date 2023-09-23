from django.urls import path
from .views import FetchApiDataView  # Import your class-based view

urlpatterns = [
     path('api-data-test/', FetchApiDataView.as_view(), name='fetch_api_data_test'),
]
