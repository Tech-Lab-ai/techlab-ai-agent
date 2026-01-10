1️⃣ MODELO DE BANCO — SCHEMA COMPLETO (Prisma)
🌍 Conceito-base

Multi-tenant real

Cada empresa (white-label) é isolada

RBAC nativo

Auditoria + LGPD

🧱 Entidades principais
🏢 Company (White-label)
model Company {
  id          String   @id @default(uuid())
  name        String
  legalName  String
  cnpj       String?
  domain     String   @unique
  logoUrl    String?
  active     Boolean  @default(true)

  users      User[]
  clients    Client[]
  plans      Plan[]
  servers    Server[]

  createdAt  DateTime @default(now())
}

👤 User (Admin / Suporte / Financeiro)
model User {
  id        String   @id @default(uuid())
  companyId String
  email     String   @unique
  password  String
  roleId   String

  role      Role     @relation(fields: [roleId], references: [id])
  company   Company  @relation(fields: [companyId], references: [id])

  createdAt DateTime @default(now())
}

🔐 Role + Permissions (RBAC)
model Role {
  id          String   @id @default(uuid())
  name        String
  permissions Permission[]
}

model Permission {
  id     String @id @default(uuid())
  key    String @unique
}

👥 Client (Cliente final)
model Client {
  id        String @id @default(uuid())
  companyId String
  email     String
  password  String

  services  Service[]
  invoices  Invoice[]

  createdAt DateTime @default(now())
}

📦 Planos
model Plan {
  id        String @id @default(uuid())
  companyId String
  name      String
  price     Float
  disk      Int
  bandwidth Int
  active    Boolean @default(true)
}

🛠 Serviço
model Service {
  id        String @id @default(uuid())
  clientId  String
  planId    String
  status    String // pending | active | suspended
  domain    String

  createdAt DateTime @default(now())
}

💳 Faturas
model Invoice {
  id        String @id @default(uuid())
  clientId  String
  total     Float
  status    String // pending | paid | overdue
  dueDate   DateTime
}

2️⃣ RBAC EM CÓDIGO — Middleware Next.js
🔐 Middleware de permissão
export function requirePermission(permission: string) {
  return async (req, user) => {
    if (!user.permissions.includes(permission)) {
      throw new Error("Acesso negado")
    }
  }
}

Uso:
await requirePermission("service.provision")(req, user)


📌 Nada de if admin === true
📌 Tudo por permissão granular

3️⃣ FLUXO STRIPE + PIX (REAL)
💳 Stripe (Cartão)
Criar pagamento
const session = await stripe.checkout.sessions.create({
  payment_method_types: ["card"],
  line_items: [{ price_data, quantity: 1 }],
  mode: "payment",
  success_url,
  cancel_url,
})

Webhook (OBRIGATÓRIO)
if (event.type === "checkout.session.completed") {
  markInvoiceAsPaid()
  enqueueProvisioning()
}


📌 Nunca confie no front-end

💸 PIX (Brasil)

Gateway: Pagar.me / Gerencianet / Stripe Pix

Gera QR Code

Webhook confirma

Fluxo:

PIX criado → QR Code → pagamento → webhook → ativa serviço

4️⃣ PROVISIONAMENTO REAL (cPanel / WHM)
🔌 Integração WHM API
Criar conta
POST https://server:2087/json-api/createacct
Headers:
Authorization: whm root:API_TOKEN


Payload:

{
  "username": "cliente123",
  "domain": "site.com.br",
  "plan": "PLANO_X"
}

Suspender
/suspendacct

Remover
/removeacct


📌 Provisionamento assíncrono
📌 Retry automático
📌 Logs obrigatórios

5️⃣ MULTI-EMPRESA (WHITE-LABEL)
🏢 Como funciona

Cada empresa tem:

Domínio próprio

Logo

Cores

Planos

Clientes

Um único sistema

🌐 Resolver empresa pelo domínio
const company = await prisma.company.findUnique({
  where: { domain: req.headers.host }
})

🔒 Isolamento total
where: {
  companyId: user.companyId
}


📌 Nunca confiar no ID vindo do front

🏁 ARQUITETURA FINAL
Next.js (App Router)
│
├── RBAC Middleware
├── API REST
├── Stripe / Pix Webhooks
├── Queue (Provisionamento)
├── Prisma (Multi-tenant)
└── cPanel / DNS / Email
