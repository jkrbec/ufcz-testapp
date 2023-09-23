from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
import requests
from decouple import config  # Ensure you have python-decouple installed

class FetchApiDataView(View):
    
    def get(self, request, *args, **kwargs):
        return render(request, 'testapp/api_data_test.html')
    
    def post(self, request, *args, **kwargs):
        url = 'http://api.sportradar.us/mma/trial/v2/en/champions.json'
        api_key = config('MY_API_KEY')  # Get the API key securely from environment variables
        response = requests.get(f'{url}?api_key={api_key}')
        
        if response.status_code == 200:
            return JsonResponse(response.json(), safe=False)
        else:
            return JsonResponse({'error': 'Unable to fetch data from API'}, status=response.status_code)
