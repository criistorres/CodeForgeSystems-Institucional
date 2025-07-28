from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import CustomUser


@admin.register(CustomUser)
class CustomUserAdmin(UserAdmin):
    model = CustomUser
    list_display = ('email', 'username', 'first_name', 'last_name', 'telefone', 'cargo', 'is_staff', 'is_active')
    list_filter = ('is_staff', 'is_active', 'cargo')
    fieldsets = UserAdmin.fieldsets + (
        ('Informações Adicionais', {'fields': ('telefone', 'cargo')}),
    )
    add_fieldsets = UserAdmin.add_fieldsets + (
        ('Informações Adicionais', {'fields': ('email', 'telefone', 'cargo')}),
    )
    search_fields = ('email', 'username', 'first_name', 'last_name')
    ordering = ('email',)
