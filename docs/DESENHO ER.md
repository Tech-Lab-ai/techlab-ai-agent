📐 1️⃣ DESENHO ER COMPLETO (MODELO ENTIDADE–RELACIONAMENTO)

Objetivo:
Multi-empresa, billing, provisionamento real, auditoria e revenda — sem gambiarras futuras.

🏢 TENANT (Empresa / White-label)
TENANT
 ├─ id (PK)
 ├─ name
 ├─ domain
 ├─ branding (JSON)
 ├─ limits (JSON)
 └─ status


Relacionamentos:

1:N → USERS

1:N → SERVICES

1:N → INVOICES

1:N → SERVERS

👤 USER
USER
 ├─ id (PK)
 ├─ tenant_id (FK)
 ├─ email
 ├─ password_hash
 ├─ role_id (FK)
 └─ 2fa_enabled

🔐 ROLE / PERMISSION (RBAC)
ROLE
 ├─ id (PK)
 └─ name

PERMISSION
 ├─ id (PK)
 └─ key

ROLE_PERMISSION
 ├─ role_id (FK)
 └─ permission_id (FK)

🧾 BILLING
INVOICE
 ├─ id (PK)
 ├─ tenant_id (FK)
 ├─ user_id (FK)
 ├─ amount
 ├─ status
 └─ due_date

PAYMENT
 ├─ id (PK)
 ├─ invoice_id (FK)
 ├─ provider (stripe/pix)
 ├─ status
 └─ external_id

🖥 SERVICE (Hospedagem / Revenda)
SERVICE
 ├─ id (PK)
 ├─ tenant_id (FK)
 ├─ user_id (FK)
 ├─ plan_id (FK)
 ├─ server_id (FK)
 ├─ status
 └─ external_ref (WHM/cPanel)

🖧 SERVER
SERVER
 ├─ id (PK)
 ├─ name
 ├─ ip
 ├─ region
 ├─ whm_url
 └─ api_token

🧯 AUDIT LOG (IMUTÁVEL)
AUDIT_LOG
 ├─ id (PK)
 ├─ tenant_id
 ├─ user_id
 ├─ action
 ├─ metadata (JSON)
 └─ created_at

🧠 2️⃣ ADR — ARCHITECTURE DECISION RECORDS
ADR-001 — Multi-Tenancy por linha (row-level)

Decisão:
Cada tabela contém tenant_id

Motivo:

Mais simples que schema por tenant

Compatível com SaaS

Permite BI e auditoria central

ADR-002 — RBAC centralizado no middleware

Decisão:
RBAC aplicado no Next.js Middleware (Edge)

Motivo:

Segurança antes da UI

Reduz bugs de autorização

Padrão enterprise

ADR-003 — Provisionamento assíncrono (Queue)

Decisão:
Provisionamento NUNCA síncrono

Motivo:

APIs externas são instáveis

Retry automático

UX melhor

ADR-004 — Audit Log imutável

Decisão:
Sem UPDATE ou DELETE

Motivo:

LGPD

Compliance

Defesa jurídica

🔄 3️⃣ FLUXO EXATO — STRIPE + PIX (REAL)
🔁 FLUXO GERAL
Pedido
 → Invoice (pending)
 → Checkout (Stripe/Pix)
 → Webhook confirmado
 → Queue provisionamento
 → Serviço ativo

💳 STRIPE (Cartão)
1. Criar sessão
stripe.checkout.sessions.create({
  customer_email,
  mode: 'subscription',
  line_items,
  success_url,
  cancel_url
})

2. Webhook

Evento:

checkout.session.completed


Ação:

Marcar invoice como paid

Enfileirar provisionamento

💸 PIX (Stripe ou Gateway Nacional)
1. Criar cobrança PIX
POST /pix/create


Resposta:

QR Code

TxID

2. Webhook PIX

Evento:

pix.received


Ação:

Confirmar pagamento

Provisionar

⚠️ Regra de ouro

NUNCA confiar no frontend
Somente webhooks ativam serviço

⚙️ 4️⃣ PROVISIONAMENTO REAL — WHM / cPanel
🔌 Integração WHM (API Token)
Endpoint base
https://server-ip:2087/json-api/

🧱 CRIAR CONTA cPanel
POST createacct


Parâmetros:

username
domain
password
pkgname

🧠 Handler de Provisionamento
async function provisionService(service) {
  const server = await selectServer()

  const res = await whm.createAccount({
    domain: service.domain,
    plan: service.plan
  })

  updateService({
    status: 'active',
    external_ref: res.account
  })

  audit('service.provisioned')
}

🔄 Retry automático (Queue)
new Queue('provision', {
  attempts: 5,
  backoff: { type: 'exponential', delay: 3000 }
})

🧯 FALHA?

Serviço fica error

Ticket automático

Log completo no audit

🏁 CONCLUSÃO 