from django.core.management.base import BaseCommand
from core.models import Product


class Command(BaseCommand):
    help = 'Popula o banco de dados com produtos fictícios'

    def handle(self, *args, **options):
        products_data = [
            {
                'name': 'Portal CF Relatórios',
                'slug': 'portal-cf-relatorios',
                'short_description': 'Portal open-source criado em Django para geração e visualização de relatórios empresariais de forma intuitiva e eficiente.',
                'description': '''O Portal CF Relatórios é uma solução completa e gratuita para empresas que precisam de uma ferramenta robusta para geração e visualização de relatórios.

Desenvolvido em Django com foco na usabilidade e performance, este portal oferece uma interface moderna e intuitiva que permite aos usuários criar, personalizar e compartilhar relatórios de forma simples e eficaz.

O projeto é totalmente open-source e está disponível em nosso GitHub, permitindo que você baixe, customize e implemente de acordo com suas necessidades específicas. A comunidade ativa contribui constantemente com melhorias e novos recursos.

Com recursos avançados de filtragem, exportação em múltiplos formatos e dashboards interativos, o Portal CF Relatórios é a escolha ideal para empresas que valorizam transparência, flexibilidade e economia.''',
                'is_opensource': True,
                'github_url': 'https://github.com/codeforge-systems/portal-cf-relatorios',
                'technology_stack': 'Django, Python, PostgreSQL',
                'price_type': 'free',
                'features': [
                    'Interface moderna e responsiva',
                    'Geração de relatórios personalizados',
                    'Exportação em PDF, Excel e CSV',
                    'Dashboards interativos',
                    'Sistema de filtros avançados',
                    'Agendamento de relatórios',
                    'Controle de acesso por usuário',
                    'API REST integrada',
                    'Gráficos e visualizações dinâmicas',
                    'Suporte a múltiplas fontes de dados'
                ],
                'image_gradient': 'from-blue-500 to-purple-600',
                'icon_text': 'CR',
                'is_featured': True,
            },
            {
                'name': 'Work Code Forge',
                'slug': 'work-code-forge',
                'short_description': 'Escritório virtual completo para gerenciamento diário da sua equipe com ferramentas de produtividade e colaboração.',
                'description': '''O Work Code Forge é uma plataforma completa de escritório virtual que revoluciona a forma como sua equipe trabalha e colabora no dia a dia.

Desenvolvida especialmente para equipes remotas e híbridas, nossa solução oferece todas as ferramentas necessárias para manter a produtividade, comunicação e organização em alto nível.

Com recursos integrados de gestão de projetos, comunicação em tempo real, compartilhamento de arquivos e acompanhamento de atividades, o Work Code Forge centraliza todas as necessidades do seu time em uma única plataforma.

A interface intuitiva e personalizável permite que cada membro da equipe adapte o ambiente de trabalho às suas preferências, aumentando significativamente a eficiência e satisfação no trabalho.''',
                'is_opensource': False,
                'github_url': None,
                'technology_stack': 'React, Node.js, MongoDB',
                'price_type': 'paid',
                'features': [
                    'Workspace personalizado para cada usuário',
                    'Chat integrado e videoconferências',
                    'Gestão de projetos e tarefas',
                    'Calendário compartilhado',
                    'Compartilhamento de arquivos seguro',
                    'Quadros Kanban colaborativos',
                    'Relatórios de produtividade',
                    'Integração com ferramentas externas',
                    'Notificações inteligentes',
                    'Backup automático em nuvem'
                ],
                'image_gradient': 'from-green-500 to-blue-500',
                'icon_text': 'WCF',
                'is_featured': True,
            },
            {
                'name': 'CF BlackHand',
                'slug': 'cf-blackhand',
                'short_description': 'Portal completo com criação de pedidos de compra, pedidos de venda e integração total com seu ERP Protheus.',
                'description': '''O CF BlackHand é nossa solução mais robusta para empresas que precisam de um portal completo e integrado para gestão de vendas e compras.

Este portal foi desenvolvido especificamente para integrar perfeitamente com o ERP Protheus, oferecendo uma interface moderna e intuitiva para processos que tradicionalmente são complexos e demorados.

Com o CF BlackHand, sua equipe pode criar pedidos de compra e venda de forma rápida e eficiente, com validações automáticas, aprovações por workflow e sincronização em tempo real com o Protheus.

O sistema inclui recursos avançados de relatórios, dashboards executivos e ferramentas de análise que fornecem insights valiosos para tomada de decisões estratégicas. A segurança é garantida através de autenticação multifator e controles de acesso granulares.''',
                'is_opensource': False,
                'github_url': None,
                'technology_stack': 'Angular, .NET Core, ADVPL',
                'price_type': 'custom',
                'features': [
                    'Criação de pedidos de compra automatizada',
                    'Gestão completa de pedidos de venda',
                    'Integração nativa com Protheus',
                    'Workflow de aprovações personalizável',
                    'Dashboard executivo em tempo real',
                    'Relatórios financeiros avançados',
                    'Controle de estoque integrado',
                    'Notificações automáticas',
                    'Auditoria completa de transações',
                    'API para integrações externas'
                ],
                'image_gradient': 'from-slate-700 to-red-600',
                'icon_text': 'CBH',
                'is_featured': True,
            },
            {
                'name': 'CF Analytics',
                'slug': 'cf-analytics',
                'short_description': 'Plataforma avançada de business intelligence com dashboards interativos e análises preditivas para tomada de decisões estratégicas.',
                'description': '''O CF Analytics é nossa plataforma de business intelligence que transforma dados brutos em insights acionáveis para seu negócio.

Com algoritmos avançados de machine learning e visualizações interativas, esta solução permite que você identifique tendências, padrões e oportunidades que não são visíveis através de relatórios tradicionais.

A plataforma se conecta facilmente com diversas fontes de dados, incluindo ERP Protheus, bancos de dados externos, planilhas e APIs, criando uma visão unificada e em tempo real do seu negócio.

Os dashboards personalizáveis e relatórios automatizados garantem que as informações certas cheguem às pessoas certas no momento certo, acelerando o processo de tomada de decisões e melhorando os resultados empresariais.''',
                'is_opensource': False,
                'github_url': None,
                'technology_stack': 'Python, TensorFlow, D3.js',
                'price_type': 'custom',
                'features': [
                    'Dashboards interativos e personalizáveis',
                    'Análises preditivas com IA',
                    'Conectores para múltiplas fontes de dados',
                    'Relatórios automatizados',
                    'Alertas inteligentes',
                    'Visualizações avançadas',
                    'Análise de tendências',
                    'Segmentação de dados',
                    'Exportação em diversos formatos',
                    'Acesso mobile responsivo'
                ],
                'image_gradient': 'from-orange-500 to-pink-600',
                'icon_text': 'CFA',
                'is_featured': False,
            },
            {
                'name': 'CF Mobile Sync',
                'slug': 'cf-mobile-sync',
                'short_description': 'Aplicativo mobile para sincronização de dados do ERP Protheus, permitindo acesso offline e atualizações em tempo real.',
                'description': '''O CF Mobile Sync é a solução perfeita para equipes que precisam acessar e atualizar informações do ERP Protheus enquanto estão em campo ou em movimento.

Este aplicativo mobile robusto oferece sincronização bidirecional com o Protheus, permitindo que vendedores, técnicos e gestores trabalhem offline e sincronizem automaticamente quando a conexão for restabelecida.

Com interface intuitiva otimizada para dispositivos móveis, o CF Mobile Sync inclui funcionalidades essenciais como consulta de estoque, cadastro de clientes, emissão de pedidos e relatórios de vendas.

A segurança é garantida através de criptografia end-to-end e autenticação biométrica, enquanto o sistema de sincronização inteligente minimiza o uso de dados e maximiza a performance.''',
                'is_opensource': False,
                'github_url': None,
                'technology_stack': 'React Native, Firebase, ADVPL',
                'price_type': 'paid',
                'features': [
                    'Funcionamento offline completo',
                    'Sincronização automática inteligente',
                    'Interface otimizada para mobile',
                    'Consulta de estoque em tempo real',
                    'Cadastro de clientes em campo',
                    'Emissão de pedidos offline',
                    'Geolocalização para vendedores',
                    'Foto e assinatura digital',
                    'Relatórios mobile personalizados',
                    'Notificações push inteligentes'
                ],
                'image_gradient': 'from-teal-500 to-cyan-600',
                'icon_text': 'CMS',
                'is_featured': False,
            },
            {
                'name': 'CF API Gateway',
                'slug': 'cf-api-gateway',
                'short_description': 'Centralizador de APIs e integrações empresariais com monitoramento em tempo real e gestão de segurança avançada.',
                'description': '''O CF API Gateway é nossa solução enterprise para gerenciamento centralizado de APIs e integrações, oferecendo controle total sobre o fluxo de dados entre sistemas.

Esta plataforma robusta atua como um ponto central para todas as integrações da sua empresa, fornecendo recursos avançados de roteamento, transformação de dados, autenticação e monitoramento.

Com suporte nativo para REST, GraphQL e SOAP, o CF API Gateway facilita a integração com sistemas legados e modernos, garantindo performance otimizada e segurança enterprise-grade.

O sistema inclui ferramentas de análise e monitoramento em tempo real que permitem identificar gargalos, otimizar performance e garantir alta disponibilidade de todas as integrações críticas do negócio.''',
                'is_opensource': False,
                'github_url': None,
                'technology_stack': 'Kong, Redis, Docker',
                'price_type': 'custom',
                'features': [
                    'Gateway centralizado para todas as APIs',
                    'Autenticação e autorização avançada',
                    'Rate limiting e throttling',
                    'Transformação de dados em tempo real',
                    'Monitoramento e logging completo',
                    'Load balancing inteligente',
                    'Cache distribuído',
                    'Versionamento de APIs',
                    'Documentação automática',
                    'Alertas e notificações personalizáveis'
                ],
                'image_gradient': 'from-indigo-500 to-purple-600',
                'icon_text': 'CAG',
                'is_featured': False,
            },
        ]

        for product_data in products_data:
            product, created = Product.objects.get_or_create(
                slug=product_data['slug'],
                defaults=product_data
            )
            
            if created:
                self.stdout.write(
                    self.style.SUCCESS(f'Produto "{product.name}" criado com sucesso!')
                )
            else:
                self.stdout.write(
                    self.style.WARNING(f'Produto "{product.name}" já existe.')
                )

        self.stdout.write(
            self.style.SUCCESS(f'\nProcesso concluído! Total de produtos: {Product.objects.count()}')
        )