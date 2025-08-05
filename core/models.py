from django.db import models
from django.urls import reverse


class Product(models.Model):
    PRICE_CHOICES = [
        ('free', 'Gratuito'),
        ('paid', 'Pago'),
        ('custom', 'Sob Consulta'),
    ]
    
    name = models.CharField(max_length=200, verbose_name='Nome')
    slug = models.SlugField(unique=True, verbose_name='Slug')
    short_description = models.TextField(max_length=300, verbose_name='Descrição Curta')
    description = models.TextField(verbose_name='Descrição Completa')
    is_opensource = models.BooleanField(default=False, verbose_name='Open Source')
    github_url = models.URLField(blank=True, null=True, verbose_name='URL do GitHub')
    technology_stack = models.CharField(max_length=200, verbose_name='Stack Tecnológico')
    price_type = models.CharField(max_length=10, choices=PRICE_CHOICES, default='custom', verbose_name='Tipo de Preço')
    features = models.JSONField(default=list, verbose_name='Recursos')
    image_gradient = models.CharField(max_length=100, default='from-purple-500 to-green-400', verbose_name='Gradiente da Imagem')
    icon_text = models.CharField(max_length=10, default='CF', verbose_name='Texto do Ícone')
    is_featured = models.BooleanField(default=False, verbose_name='Produto em Destaque')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Criado em')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Atualizado em')
    
    class Meta:
        verbose_name = 'Produto'
        verbose_name_plural = 'Produtos'
        ordering = ['-is_featured', 'name']
    
    def __str__(self):
        return self.name
    
    def get_absolute_url(self):
        return reverse('core:product_detail', kwargs={'slug': self.slug})
    
    @property
    def price_display(self):
        price_map = {
            'free': 'Gratuito',
            'paid': 'Comercial',
            'custom': 'Sob Consulta'
        }
        return price_map.get(self.price_type, self.price_type)


class ContactMessage(models.Model):
    SUBJECT_CHOICES = [
        ('suporte', 'Suporte Técnico'),
        ('vendas', 'Informações de Vendas'),
        ('parceria', 'Proposta de Parceria'),
        ('produto', 'Dúvidas sobre Produtos'),
        ('orcamento', 'Solicitação de Orçamento'),
        ('outros', 'Outros Assuntos'),
    ]
    
    name = models.CharField(max_length=100, verbose_name='Nome')
    email = models.EmailField(verbose_name='Email')
    phone = models.CharField(max_length=20, blank=True, null=True, verbose_name='Telefone')
    company = models.CharField(max_length=100, blank=True, null=True, verbose_name='Empresa')
    subject = models.CharField(max_length=20, choices=SUBJECT_CHOICES, verbose_name='Assunto')
    message = models.TextField(verbose_name='Mensagem')
    is_read = models.BooleanField(default=False, verbose_name='Lida')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Recebida em')
    
    class Meta:
        verbose_name = 'Mensagem de Contato'
        verbose_name_plural = 'Mensagens de Contato'
        ordering = ['-created_at']
    
    def __str__(self):
        return f'{self.name} - {self.get_subject_display()}'


class Client(models.Model):
    name = models.CharField(max_length=100, verbose_name='Nome do Cliente')
    description = models.CharField(max_length=200, verbose_name='Descrição/Segmento')
    logo = models.ImageField(
        upload_to='clients/logos/', 
        verbose_name='Logo',
        help_text='Recomendado: PNG/SVG transparente, proporção 2:1 (ex: 200x100px)'
    )
    website_url = models.URLField(blank=True, null=True, verbose_name='Site')
    is_featured = models.BooleanField(
        default=False, 
        verbose_name='Cliente Destaque',
        help_text='Clientes em destaque aparecem primeiro no carrossel'
    )
    order = models.PositiveIntegerField(
        default=0, 
        verbose_name='Ordem de Exibição',
        help_text='Números menores aparecem primeiro'
    )
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Adicionado em')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='Atualizado em')
    
    class Meta:
        verbose_name = 'Cliente'
        verbose_name_plural = 'Clientes'
        ordering = ['-is_featured', 'order', 'name']
    
    def __str__(self):
        return self.name
    
    @property
    def logo_url(self):
        """Retorna URL do logo ou placeholder se não existir"""
        if self.logo and hasattr(self.logo, 'url'):
            return self.logo.url
        return f"https://via.placeholder.com/200x80/FFFFFF/333333?text={self.name.replace(' ', '+')}"