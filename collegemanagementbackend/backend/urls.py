from django.conf.urls import url
from django.urls import path
from backend import views

urlpatterns = [
    url(r'^col/$', views.college),
    url(r'^col/([0-9]+)$', views.college),
    url(r'^cou/$', views.course),
    url(r'^cou/([0-9]+)$', views.course),
    url(r'^std/$', views.student),
    url(r'^std/([0-9]+)$', views.student),
    url(r'^tec/$', views.teacher),
    url(r'^tec/([0-9]+)$', views.teacher),
]