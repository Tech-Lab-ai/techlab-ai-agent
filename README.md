# Dresbach Hosting - Painel de Hospedagem e Revenda

![Dresbach Hosting Logo](./public/LOGO_DRESBACH_500.svg)

## Visão Geral

Dresbach Hosting é uma plataforma de hospedagem e revenda de sites, com painel administrativo completo estilo WHM, integração com Stripe para pagamentos, provisionamento automático via WHM/cPanel e suporte a múltiplas empresas (white-label).  

O sistema foi desenvolvido em **Next.js**, **Node.js**, com **Redis/BullMQ** para filas, **PostgreSQL** para banco de dados e integração com APIs externas (Stripe, cPanel/WHM, Cloudflare, Registro.br).

---

## Funcionalidades Principais

### Painel Admin
- Gestão de contas de hospedagem e revenda
- Provisionamento automático de cPanel/WHM
- Dashboard de métricas e relatórios
- Integração com Stripe (pagamentos, assinaturas, reembolsos)
- Multi-empresa/white-label
- Controle de permissões via RBAC

### Área do Cliente
- Cadastro e login
- Histórico de pedidos e faturas
- Gestão de domínios e DNS
- Suporte técnico via tickets
- Backup externo e restauração de sites
- Gestão de contas de email e subdomínios

### Marketplace de Addons
- Compra e venda de addons para revendas
- Integração direta com Stripe para pagamento
- Controle de estoque virtual de produtos digitais

### Infraestrutura
- Multi-região / HA real
- DNS automático (Cloudflare / Registro.br)
- SSL automático via Let's Encrypt
- Logs imutáveis e audit trail
- Suporte a escalabilidade horizontal

---

## Tecnologias
- **Frontend:** Next.js, React, TailwindCSS
- **Backend:** Node.js, Express / Next.js API routes
- **Banco de Dados:** PostgreSQL
- **Filas/Jobs:** BullMQ + Redis
- **Provisionamento:** WHM/cPanel API
- **Pagamentos:** Stripe (Checkout, Billing, Subscriptions, API)
- **DNS:** Cloudflare API + Registro.br API
- **Segurança:** JWT, RBAC, hardening, SSL

---

## Estrutura do Projeto

dresbachhosting/
├─ src/
│ ├─ pages/ # Páginas Next.js
│ │ ├─ index.tsx # Home
│ │ ├─ checkout/ # Checkout e planos
│ │ ├─ dashboard/ # Painel do cliente
│ │ └─ admin/ # Painel da empresa
│ ├─ components/ # Componentes React reutilizáveis
│ ├─ lib/ # Integrações externas (Stripe, WHM)
│ ├─ api/ # API routes Next.js
│ └─ db/ # Modelos e migrations SQL
├─ scripts/ # Scripts de deploy e provisionamento
├─ public/ # Assets públicos
├─ README.md
└─ package.json

yaml
Copiar código

---

## Endpoints Stripe Integrados

- `POST /api/checkout/session` → Criar sessão de pagamento
- `POST /api/stripe/webhook` → Webhook para eventos Stripe (pagamentos, disputas)
- `GET /api/customers/:id` → Buscar dados de cliente
- `POST /api/subscriptions` → Criar assinatura
- `POST /api/invoices/:id/pay` → Pagar fatura
- `GET /api/products` → Listar produtos e planos
- `POST /api/refunds` → Criar reembolso

---

## Banco de Dados (Modelo Resumido)

- **Users**: id, nome, email, senha, role_id, empresa_id
- **Roles**: id, nome, permissões
- **Empresas**: id, nome, cnpj, configuração_whm
- **Plans**: id, nome, recursos, preço
- **Subscriptions**: id, user_id, plan_id, status, stripe_subscription_id
- **Invoices**: id, subscription_id, status, total, data_vencimento
- **Domains**: id, user_id, nome, status_dns, ssl
- **ProvisioningJobs**: id, type, status, payload, logs

---

## Guia de Desenvolvimento

1. Clone o repositório:
```bash
git clone https://github.com/dresbach-records/projedodresbachhosting.git
Instale dependências:

bash
Copiar código
npm install
Configure variáveis de ambiente (.env):

env
Copiar código
DATABASE_URL=postgresql://user:pass@localhost:5432/dresbach
REDIS_URL=redis://localhost:6379
STRIPE_SECRET_KEY=sk_test_xxx
WHM_API_URL=https://example.com:2087
WHM_API_TOKEN=xxxx
Rode migrações e seed:

bash
Copiar código
npx prisma migrate dev
npx prisma db seed
Inicie o servidor Next.js:

bash
Copiar código
npm run dev
Inicie o worker de provisionamento:

bash
Copiar código
node scripts/worker.js
Contribuição
Leia todos os README.md das subpastas (/lib, /scripts, /db) antes de adicionar funcionalidades.

Siga o modelo de RBAC e multi-empresa ao criar novas páginas e endpoints.

Para novas integrações Stripe ou WHM, adicione sempre testes automatizados (/tests).

Licença
Dresbach Hosting © 2026 - Todos os direitos reservados.
