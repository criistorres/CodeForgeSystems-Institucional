from django.contrib import admin
from .models import Product, ContactMessage


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