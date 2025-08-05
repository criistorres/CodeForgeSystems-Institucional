from django.core.management.base import BaseCommand
from core.models import Client


class Command(BaseCommand):
    help = 'Popula o banco de dados com clientes de exemplo'

    def handle(self, *args, **options):
        clients_data = [
            {
                'name': 'Água de Cheiro',
                'description': 'Perfumaria & Cosméticos',
                'is_featured': True,
                'order': 10,
                'website_url': 'https://www.aguadecheiro.com.br'
            },
            {
                'name': 'Havanna',
                'description': 'Doces & Café Premium',
                'is_featured': True,
                'order': 20,
                'website_url': 'https://www.havanna.com.br'
            },
            {
                'name': 'Fragance',
                'description': 'Perfumaria Premium',
                'is_featured': True,
                'order': 30,
            },
            {
                'name': 'Grupo MR',
                'description': 'Conglomerado Empresarial',
                'is_featured': False,
                'order': 40,
            },
            {
                'name': 'TechCorp Solutions',
                'description': 'Soluções Corporativas',
                'is_featured': False,
                'order': 50,
            },
        ]

        for client_data in clients_data:
            client, created = Client.objects.get_or_create(
                name=client_data['name'],
                defaults=client_data
            )
            
            if created:
                self.stdout.write(
                    self.style.SUCCESS(f'Cliente "{client.name}" criado com sucesso!')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'Cliente "{client.name}" já existe.')
                )

        self.stdout.write(
            self.style.SUCCESS(f'\nProcesso concluído! Total de clientes: {Client.objects.count()}')
        )