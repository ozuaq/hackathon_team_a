from django.shortcuts import render

# Create your views here.
def freedom_view(request):
    return render(request, 'a_app/freedom.html')