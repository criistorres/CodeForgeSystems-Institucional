from django import forms
from django.contrib.auth.forms import UserCreationForm
from .models import CustomUser


class CustomUserCreationForm(UserCreationForm):
    email = forms.EmailField(required=True)
    telefone = forms.CharField(max_length=20, required=False)
    cargo = forms.CharField(max_length=100, required=False)
    first_name = forms.CharField(max_length=30, required=True)
    last_name = forms.CharField(max_length=30, required=True)

    class Meta:
        model = CustomUser
        fields = ('username', 'email', 'first_name', 'last_name', 'telefone', 'cargo', 'password1', 'password2')

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['username'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'Nome de usuário'
        })
        self.fields['email'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'seu@email.com'
        })
        self.fields['first_name'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'Primeiro nome'
        })
        self.fields['last_name'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'Sobrenome'
        })
        self.fields['telefone'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': '(11) 99999-9999'
        })
        self.fields['cargo'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'Seu cargo na empresa'
        })
        self.fields['password1'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'Senha'
        })
        self.fields['password2'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'Confirme a senha'
        })

    def save(self, commit=True):
        user = super().save(commit=False)
        user.email = self.cleaned_data['email']
        user.telefone = self.cleaned_data['telefone']
        user.cargo = self.cleaned_data['cargo']
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        if commit:
            user.save()
        return user