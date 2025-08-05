# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Django-based institutional website for CodeForge Systems, featuring a custom user authentication system, product catalog, and modern frontend design with Tailwind CSS.

## Development Commands

### Virtual Environment
```bash
# Activate virtual environment (macOS/Linux)
source venv/bin/activate

# Activate virtual environment (Windows)
venv\Scripts\activate
```

### Database Operations
```bash
# Create and apply migrations
python manage.py makemigrations
python manage.py migrate

# Populate products database
python manage.py populate_products
```

### Development Server
```bash
# Run development server
python manage.py runserver
```

### User Management
```bash
# Create superuser
python manage.py createsuperuser
```

## Architecture & Structure

### Django Apps Structure
- **accounts**: Custom user authentication system with email-based login
- **core**: Main application containing products, contact forms, and website pages
- **codeforge_systems**: Main project configuration

### Key Models
- **CustomUser** (accounts.models): Extended user model with email, telefone, cargo fields. Uses email as USERNAME_FIELD
- **Product** (core.models): Product catalog with features stored as JSONField, supports open-source/commercial pricing
- **ContactMessage** (core.models): Contact form submissions with categorized subjects

### Authentication System
- Email-based authentication (USERNAME_FIELD = 'email')
- Custom user model extends AbstractUser
- Login/register templates with CSRF protection
- Admin interface customization

### Static Files & Templates
- Static files in `/static/` directory with CSS and JS organization
- Templates use inheritance with `base.html`
- Tailwind CSS via CDN for styling
- Modern UI with gradients, animations, and responsive design

### Database Configuration
- SQLite for development (db.sqlite3)
- Brazilian locale (pt-br) and São Paulo timezone
- JSONField support for product features

### Management Commands
- `populate_products`: Seeds database with CodeForge Systems product catalog
- Located in `core/management/commands/`

## Important Settings
- Custom user model: `AUTH_USER_MODEL = 'accounts.CustomUser'`
- Language: Portuguese Brazil (pt-br)
- Timezone: America/Sao_Paulo
- Static files directory configured
- Templates directory in project root

## URLs & Navigation
- `/` - Homepage
- `/accounts/login/` - User login
- `/accounts/register/` - User registration  
- `/admin/` - Django admin interface
- Product URLs follow pattern with slugs

## Development Notes
- Uses Django 5.2.4 with minimal additional dependencies
- Frontend relies on Tailwind CSS and vanilla JavaScript
- Product features are stored as JSON arrays for flexibility
- Email uniqueness enforced at model level