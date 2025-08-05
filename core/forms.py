from django import forms
from .models import ContactMessage


class ContactForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'phone', 'company', 'subject', 'message']
        
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.fields['name'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'Seu nome completo'
        })
        self.fields['email'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'seu@email.com'
        })
        self.fields['phone'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': '(11) 99999-9999'
        })
        self.fields['company'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'Nome da sua empresa'
        })
        self.fields['subject'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-3 rounded-lg'
        })
        self.fields['message'].widget.attrs.update({
            'class': 'form-input w-full px-4 py-16 rounded-lg resize-none',
            'placeholder': 'Descreva como podemos ajudá-lo...',
            'rows': 6
        })


class SimpleContactForm(forms.Form):
    name = forms.CharField(
        max_length=100,
        widget=forms.TextInput(attrs={
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'Seu nome'
        })
    )
    email = forms.EmailField(
        widget=forms.EmailInput(attrs={
            'class': 'form-input w-full px-4 py-3 rounded-lg',
            'placeholder': 'seu@email.com'
        })
    )
    message = forms.CharField(
        widget=forms.Textarea(attrs={
            'class': 'form-input w-full px-4 py-6 rounded-lg resize-none',
            'placeholder': 'Sua mensagem...',
            'rows': 4
        })
    )