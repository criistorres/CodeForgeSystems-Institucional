# CodeForge Systems - Website Institucional

## Descrição
Website institucional da CodeForge Systems desenvolvido em Django com sistema de usuários customizado e design baseado no template original.

## Funcionalidades Implementadas

### ✅ Sistema de Usuários
- **Modelo de usuário customizado** com campos adicionais:
  - Email (usado para login)
  - Telefone
  - Cargo
- **Autenticação por email** 
- **Sistema completo de login/logout**
- **Registro de novos usuários**
- **Painel administrativo customizado**

### ✅ Interface
- **Página inicial** baseada no design original
- **Design responsivo** com Tailwind CSS
- **Animações e efeitos visuais**:
  - Typewriter effect
  - Particles.js
  - Gradientes líquidos animados
  - Órbita de tecnologias
- **WhatsApp floating button**
- **Navegação suave** entre seções

### ✅ Estrutura do Projeto
- **Django 5.2.4** com apps organizados
- **Templates** estruturados com herança
- **Arquivos estáticos** organizados (CSS/JS)
- **Configurações** otimizadas para desenvolvimento
- **Ambiente virtual** configurado

## Estrutura de Arquivos

```
codeforge_systems/
├── venv/                 # Ambiente virtual Python
├── accounts/             # App de usuários
│   ├── models.py        # Modelo CustomUser
│   ├── forms.py         # Formulários de registro
│   ├── views.py         # Views de autenticação
│   ├── urls.py          # URLs do app
│   └── admin.py         # Admin customizado
├── core/                # App principal
│   ├── views.py         # View da home
│   └── urls.py          # URLs principais
├── templates/           # Templates HTML
│   ├── base.html        # Template base
│   ├── core/
│   │   └── home.html    # Página inicial
│   └── accounts/
│       ├── login.html   # Página de login
│       └── register.html # Página de registro
├── static/              # Arquivos estáticos
│   ├── css/
│   │   └── styles.css   # Estilos customizados
│   └── js/
│       └── main.js      # JavaScript principal
├── requirements.txt     # Dependências Python
├── manage.py
└── README.md
```

## Como Executar

### 1. Clonar o repositório
```bash
git clone <repository-url>
cd CodeForgeSystems-Institucional
```

### 2. Ativar o ambiente virtual
```bash
# No macOS/Linux
source venv/bin/activate

# No Windows
venv\Scripts\activate
```

### 3. Instalar dependências
```bash
pip install -r requirements.txt
```

### 4. Executar migrações (se necessário)
```bash
python manage.py migrate
```

### 5. Executar o servidor
```bash
python manage.py runserver
```

### 6. Acessar o projeto
- **Website**: http://127.0.0.1:8000/
- **Admin**: http://127.0.0.1:8000/admin/

## 🔐 Credenciais do Superusuário

### Superusuário Admin
- **Usuário**: `admin`
- **Email**: `comercial@codeforgeit.com.br`
- **Senha**: `admin123`
- **Nome**: Admin CodeForge

> ⚠️ **Importante**: Altere essas credenciais em produção!

## URLs Disponíveis

- `/` - Página inicial
- `/accounts/login/` - Login
- `/accounts/register/` - Registro
- `/accounts/logout/` - Logout
- `/admin/` - Painel administrativo

## 🎨 Paleta de Cores

### Cores Principais
- **Roxo Principal**: `#a855f7` (rgb(168, 85, 247)) - Purple-500
- **Verde Principal**: `#06d6a0` (rgb(6, 214, 160)) - Teal/Green
- **Azul Acento**: `#3b82f6` (rgb(59, 130, 246)) - Blue-500

### Cores Secundárias
- **Roxo Claro**: `#8b5cf6` (rgb(139, 92, 246)) - Purple-400
- **Verde Claro**: `#10b981` (rgb(16, 185, 129)) - Emerald-500
- **Azul Claro**: `#06d6a0` (rgb(6, 214, 160))

### Cores de Suporte
- **Laranja**: `#f59e0b` (rgb(245, 158, 11)) - Amber-500
- **Vermelho**: `#ef4444` (rgb(239, 68, 68)) - Red-500
- **Rosa**: `#f97316` (rgb(249, 115, 22)) - Orange-500

### Cores Neutras
- **Slate 900**: `#0f172a` (rgb(15, 23, 42)) - Fundo escuro principal
- **Slate 800**: `#1e293b` (rgb(30, 41, 59)) - Fundo secundário
- **Slate 700**: `#334155` (rgb(51, 65, 85)) - Elementos escuros
- **Slate 600**: `#475569` (rgb(71, 85, 105)) - Texto secundário
- **Slate 400**: `#94a3b8` (rgb(148, 163, 184)) - Texto claro
- **Slate 300**: `#cbd5e1` (rgb(203, 213, 225)) - Texto muito claro
- **Branco**: `#ffffff` (rgb(255, 255, 255)) - Texto principal claro

### Gradientes Utilizados
- **Gradiente Principal**: `linear-gradient(135deg, #a855f7 0%, #06d6a0 100%)`
- **Gradiente Alternativo**: `linear-gradient(45deg, #a855f7, #06d6a0, #3b82f6, #8b5cf6, #10b981, #6366f1)`
- **Gradiente Líquido**: `linear-gradient(-45deg, #667eea, #764ba2, #f093fb, #f5576c, #4facfe, #00f2fe, #a8edea, #fed6e3)`

### WhatsApp
- **Verde WhatsApp**: `#25d366` (rgb(37, 211, 102))
- **Verde WhatsApp Escuro**: `#128c7e` (rgb(18, 140, 126))

> 💡 **Nota**: Essas cores são usadas em todo o design para manter consistência visual. O gradiente principal (roxo → verde) é a identidade visual da marca.

## Tecnologias Utilizadas

- **Backend**: Django 5.2.4
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Tailwind CSS (via CDN)
- **Animações**: Particles.js
- **Banco de dados**: SQLite (desenvolvimento)
- **Fontes**: Inter + JetBrains Mono (Google Fonts)

## Recursos Implementados

### 🎨 Design
- Design fiel ao template original
- Interface moderna e responsiva
- Efeitos visuais avançados
- Navegação intuitiva

### 🔐 Autenticação
- Login por email ou username
- Registro com validação
- Mensagens de feedback
- Proteção CSRF

### 📱 Responsividade
- Layout adaptável para mobile
- Menu hambúrguer para dispositivos móveis
- Botão WhatsApp responsivo

### ⚡ Performance
- Arquivos estáticos otimizados
- Loading assíncrono de recursos
- Animações CSS eficientes

## Próximos Passos Sugeridos

1. **Configurar email backend** para envio de emails
2. **Implementar recuperação de senha**
3. **Adicionar mais páginas** (sobre, serviços, contato)
4. **Configurar banco PostgreSQL** para produção
5. **Implementar cache** para melhor performance
6. **Adicionar testes automatizados**
7. **Deploy em servidor** (AWS, Heroku, etc.)

## Contato

Para dúvidas ou suporte, entre em contato através do WhatsApp integrado no site ou email: contato@codeforge.com.br