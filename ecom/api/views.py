from django.http import JsonResponse

# Create your views here.

def home(request):
    return JsonResponse({'info':'Django Rest Framework ', 'Name':'Ishan'})