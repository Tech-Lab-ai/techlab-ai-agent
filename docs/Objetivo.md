1️⃣ PAINEL ADMIN (UI + ROTAS) — ESTILO WHM PROFISSIONAL
🎯 Objetivo

Painel operacional (não cliente):

Controlar infraestrutura

Operar empresas (tenants)

Auditar tudo

Nunca mexer direto em layout/HTML fora de componentes

🧭 Sitemap (Admin)
/admin
├─ dashboard
├─ tenants
│  ├─ list
│  ├─ create
│  └─ [tenantId]
│     ├─ overview
│     ├─ branding
│     ├─ billing
│     └─ limits
├─ servers
│  ├─ list
│  ├─ create
│  └─ [serverId]
│     ├─ metrics
│     ├─ whm
│     ├─ capacity
│     └─ logs
├─ services
│  ├─ plans
│  ├─ addons
│  └─ provisioning
├─ migrations
│  ├─ queue
│  └─ [migrationId]
├─ billing
│  ├─ invoices
│  ├─ payments
│  └─ disputes
├─ dns-ssl
│  ├─ zones
│  ├─ certificates
│  └─ failures
├─ audit-logs
├─ incidents
└─ settings

🧱 UI Rules (obrigatórias)

❌ Proibido lógica em páginas

❌ Proibido alterar layout sem demanda

✅ Tudo via /components

✅ Containers só consomem hooks

/components
  /admin
    ServerCard.tsx
    TenantTable.tsx
    CapacityBar.tsx

🔐 Ações Sensíveis

Requer 2FA

Log obrigatório

Confirmação dupla

2️⃣ API PÚBLICA — OPENAPI 3.1 (WHITE-LABEL READY)
🎯 Objetivo

Permitir:

Revendedores

Integrações externas

Marketplace

🔑 Auth
securitySchemes:
  bearerAuth:
    type: http
    scheme: bearer

📦 OpenAPI (exemplo real)
paths:
  /v1/customers:
    post:
      summary: Criar cliente
      security: [ bearerAuth: [] ]
      requestBody:
        required: true
      responses:
        201:
          description: Cliente criado

📦 Endpoints-Chave
POST   /v1/customers
POST   /v1/services
POST   /v1/domains
POST   /v1/provision
GET    /v1/invoices
POST   /v1/migrations

🧠 Scopes
customers:read
customers:create
services:create
billing:read
dns:write

🔒 Rate Limit

Por tenant

Por API key

Burst control

3️⃣ MÓDULO DE MIGRAÇÃO (CPANEL → CPANEL)
🎯 Objetivo

Migração sem suporte humano.

🔄 Fluxo Técnico
Criar Migração
→ Validar credenciais
→ Criar sessão WHM
→ Executar Transfer Tool
→ Monitorar
→ Finalizar

📊 Estado da Migração
Migration {
  id
  status: queued | running | success | failed
  progress
  logs
}

📜 Logs (visíveis)

Email

Banco

Arquivos

DNS

SSL

🧯 Retry Strategy

Falha temporária → retry

Falha crítica → abort + alerta

4️⃣ SISTEMA DE REVENDA COMPLETO (MULTI-TENANT)
🎯 Conceito

Cada empresa = host independente.

🏢 Tenant
Tenant {
  id
  name
  domain
  branding
  limits
  pricing
}

🧠 O que o revendedor pode:

Criar clientes

Criar planos

Definir preços

Ver faturas

Usar API própria

❌ O que NÃO pode:

Ver outros tenants

Ver infra

Ver logs globais

🎨 White-label

Logo

Cor

Domínio

Emails

💰 Billing

Comissão

Split

Repasse automático

5️⃣ ALTA DISPONIBILIDADE (HA REAL — SEM LORE)
🎯 Objetivo

Sistema não pode cair.

🧱 Arquitetura HA
Load Balancer
├─ App 1
├─ App 2
└─ App 3

Redis (Cluster)
Postgres (Primary + Replica)

🔁 Estratégia

Stateless apps

Sessions no Redis

Jobs idempotentes

🧠 Banco

Primary write

Replica read

Failover manual (controlado)

🧯 Disaster Recovery

Backup diário

Snapshot semanal

Restore testado

📊 Health Checks

API

DB

Queue

DNS

SSL

🏁 VISÃO FINAL (SEM EXAGERO)

Você construiu:

Um WHM moderno

Um WHMCS melhor

Um host multi-região

Um produto white-label

Uma infra de verdade