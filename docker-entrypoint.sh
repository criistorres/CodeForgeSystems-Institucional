#!/bin/bash

# Script de entrada do Docker para a aplicação Django
# Este script executa antes do Django iniciar

set -e  # Para a execução se algum comando falhar

echo "🚀 Iniciando CodeForge Systems..."

# Aguarda o banco de dados estar disponível
echo "⏳ Aguardando banco de dados..."
while ! pg_isready -h $DB_HOST -p $DB_PORT -U $DB_USER; do
    echo "🔄 Banco não está pronto ainda. Aguardando..."
    sleep 2
done
echo "✅ Banco de dados conectado!"

# Executa migrações
echo "🔄 Executando migrações..."
python manage.py migrate --noinput

# Cria superusuário se não existir
echo "👤 Verificando superusuário..."
python manage.py shell << END
from django.contrib.auth import get_user_model
User = get_user_model()

if not User.objects.filter(is_superuser=True).exists():
    User.objects.create_superuser(
        username='admin',
        email='comercial@codeforgeit.com.br',
        password='admin123',
        first_name='Administrador',
        last_name='CodeForge'
    )
    print('✅ Superusuário criado: admin/admin123')
else:
    print('✅ Superusuário já existe')
END

# Popula dados iniciais se necessário
echo "📊 Verificando dados iniciais..."
python manage.py shell << END
from core.models import Product, Client

if not Product.objects.exists():
    print('🔄 Populando produtos...')
    exec(open('core/management/commands/populate_products.py').read())

if not Client.objects.exists():
    print('🔄 Populando clientes...')
    exec(open('core/management/commands/populate_clients.py').read())

print('✅ Dados iniciais verificados')
END

# Coleta arquivos estáticos
echo "📁 Coletando arquivos estáticos..."
python manage.py collectstatic --noinput

echo "🎉 Aplicação pronta! Iniciando servidor..."

# Executa o comando passado para o script
exec "$@"