from django.urls import path
from . import views

app_name = 'core'

urlpatterns = [
    path('', views.home, name='home'),
    path('sobre-nos/', views.about, name='about'),
    path('produtos/', views.products, name='products'),
    path('produtos/<slug:slug>/', views.product_detail, name='product_detail'),
    path('contato/', views.contact, name='contact'),
]