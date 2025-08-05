from django.contrib import admin
from django.utils.html import format_html
from django.db import models
from .models import Product, ContactMessage, Client


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'technology_stack', 'price_type', 'is_opensource', 'is_featured', 'created_at')
    list_filter = ('is_opensource', 'is_featured', 'price_type', 'technology_stack')
    search_fields = ('name', 'short_description', 'technology_stack')
    prepopulated_fields = {'slug': ('name',)}
    
    fieldsets = (
        ('Informações Básicas', {
            'fields': ('name', 'slug', 'short_description', 'description')
        }),
        ('Configurações', {
            'fields': ('is_opensource', 'is_featured', 'price_type', 'technology_stack')
        }),
        ('Links e Recursos', {
            'fields': ('github_url', 'features')
        }),
        ('Aparência', {
            'fields': ('image_gradient', 'icon_text')
        }),
    )
    
    def get_readonly_fields(self, request, obj=None):
        if obj:  # editing an existing object
            return self.readonly_fields + ('slug',)
        return self.readonly_fields


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('name', 'email', 'company', 'subject', 'is_read', 'created_at')
    list_filter = ('subject', 'is_read', 'created_at')
    search_fields = ('name', 'email', 'company', 'message')
    readonly_fields = ('created_at',)
    
    fieldsets = (
        ('Informações do Contato', {
            'fields': ('name', 'email', 'phone', 'company')
        }),
        ('Mensagem', {
            'fields': ('subject', 'message')
        }),
        ('Status', {
            'fields': ('is_read', 'created_at')
        }),
    )
    
    def mark_as_read(self, request, queryset):
        queryset.update(is_read=True)
        self.message_user(request, f'{queryset.count()} mensagens marcadas como lidas.')
    mark_as_read.short_description = 'Marcar mensagens selecionadas como lidas'
    
    def mark_as_unread(self, request, queryset):
        queryset.update(is_read=False)
        self.message_user(request, f'{queryset.count()} mensagens marcadas como não lidas.')
    mark_as_unread.short_description = 'Marcar mensagens selecionadas como não lidas'
    
    actions = [mark_as_read, mark_as_unread]
    
    # Destacar mensagens não lidas
    def get_list_display_links(self, request, list_display):
        return ('name',)
    
    class Media:
        css = {
            'all': ('admin/css/contact_messages.css',)
        }


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ('logo_preview', 'name', 'description', 'is_featured', 'order', 'created_at')
    list_display_links = ('logo_preview', 'name')
    list_filter = ('is_featured', 'created_at')
    search_fields = ('name', 'description')
    list_editable = ('is_featured', 'order')
    
    fieldsets = (
        ('Informações Básicas', {
            'fields': ('name', 'description', 'logo')
        }),
        ('Configurações', {
            'fields': ('is_featured', 'order', 'website_url')
        }),
    )
    
    def logo_preview(self, obj):
        """Exibe preview do logo na lista"""
        if obj.logo:
            return format_html(
                '<img src="{}" style="width: 60px; height: 30px; object-fit: contain; background: #f8f9fa; border: 1px solid #dee2e6; border-radius: 4px;"/>',
                obj.logo.url
            )
        return format_html(
            '<div style="width: 60px; height: 30px; background: #e9ecef; border: 1px solid #dee2e6; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 10px; color: #6c757d;">Sem logo</div>'
        )
    logo_preview.short_description = 'Logo'
    
    def save_model(self, request, obj, form, change):
        """Ajusta ordem automaticamente se não especificada"""
        if obj.order == 0:
            # Define ordem baseada no último cliente + 10
            last_order = Client.objects.aggregate(
                max_order=models.Max('order')
            )['max_order'] or 0
            obj.order = last_order + 10
        super().save_model(request, obj, form, change)
    
    # Ações personalizadas
    def make_featured(self, request, queryset):
        queryset.update(is_featured=True)
        self.message_user(request, f'{queryset.count()} cliente(s) marcado(s) como destaque.')
    make_featured.short_description = 'Marcar como cliente destaque'
    
    def remove_featured(self, request, queryset):
        queryset.update(is_featured=False)
        self.message_user(request, f'{queryset.count()} cliente(s) removido(s) do destaque.')
    remove_featured.short_description = 'Remover do destaque'
    
    actions = [make_featured, remove_featured]