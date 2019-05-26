from django.views.generic import TemplateView
from django.views.decorators.cache import never_cache

from django.contrib import admin
from django.urls import path, include   

from api import urls

urlpatterns = [
    path('', never_cache(TemplateView.as_view(template_name='dist/index.html')), name='index'),
    path('api/', include('api.urls')),
    path('admin/', admin.site.urls),
]
