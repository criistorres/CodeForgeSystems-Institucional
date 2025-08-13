from django.shortcuts import render, get_object_or_404, redirect
from django.contrib import messages
from .models import Product, ContactMessage, Client, Partner
from .forms import ContactForm, SimpleContactForm


def home(request):
    # Processar formulário simples de contato se enviado
    if request.method == 'POST':
        simple_form = SimpleContactForm(request.POST)
        if simple_form.is_valid():
            # Criar mensagem de contato com dados do formulário simples
            ContactMessage.objects.create(
                name=simple_form.cleaned_data['name'],
                email=simple_form.cleaned_data['email'],
                message=simple_form.cleaned_data['message'],
                subject='outros'  # Assunto padrão para formulário simples
            )
            messages.success(request, 'Obrigado! Sua mensagem foi enviada com sucesso. Entraremos em contato em breve.')
            return redirect('core:home')
    else:
        simple_form = SimpleContactForm()
    
    # Buscar clientes para o carrossel
    clients = Client.objects.filter().order_by('-is_featured', 'order', 'name')
    partners = Partner.objects.filter().order_by('-is_featured', 'order', 'name')
    
    context = {
        'simple_form': simple_form,
        'clients': clients,
        'partners': partners,
    }
    return render(request, 'core/home.html', context)


def about(request):
    return render(request, 'core/about.html')


def products(request):
    products = Product.objects.all()
    featured_products = Product.objects.filter(is_featured=True)[:3]
    
    context = {
        'products': products,
        'featured_products': featured_products,
    }
    return render(request, 'core/products.html', context)


def product_detail(request, slug):
    product = get_object_or_404(Product, slug=slug)
    related_products = Product.objects.exclude(slug=slug)[:3]
    
    context = {
        'product': product,
        'related_products': related_products,
    }
    return render(request, 'core/product_detail.html', context)


def contact(request):
    if request.method == 'POST':
        form = ContactForm(request.POST)
        if form.is_valid():
            contact_message = form.save()
            messages.success(
                request, 
                f'Obrigado, {contact_message.name}! Sua mensagem foi recebida com sucesso. '
                'Nossa equipe entrará em contato em até 24 horas.'
            )
            return redirect('core:contact')
    else:
        form = ContactForm()
    
    context = {
        'form': form,
    }
    return render(request, 'core/contact.html', context)