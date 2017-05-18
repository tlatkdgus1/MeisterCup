from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.views.static import serve

urlpatterns = [
	url(r'^admin/', admin.site.urls),
	url(r'^user/', include('userAccount.urls', namespace='user')),
	url(r'^media/(?P<path>.*)$', serve, {
        'document_root': settings.MEDIA_ROOT}),
]
