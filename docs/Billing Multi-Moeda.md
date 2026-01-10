1️⃣ Billing Multi-Moeda (Arquitetura Final)
🌍 Princípios (enterprise)

Preço base sempre em USD

Conversão somente no momento do pedido

Invoice imutável

FX auditável

Compatível com Stripe + Pix

🧠 Fluxo
Plano (USD)
→ FX Provider
→ Valor Local
→ Invoice
→ Pagamento

🗄 Modelo de dados (SQL – final)
currencies (
  code CHAR(3) PRIMARY KEY,
  name TEXT,
  symbol TEXT,
  precision INT
);

exchange_rates (
  id UUID PK,
  base CHAR(3),
  target CHAR(3),
  rate DECIMAL(18,8),
  provider TEXT,
  fetched_at TIMESTAMP
);

pricing_plans (
  id UUID PK,
  name TEXT,
  price_usd DECIMAL(10,2),
  billing_cycle TEXT
);

invoices (
  id UUID PK,
  user_id UUID,
  total_usd DECIMAL(10,2),
  total_local DECIMAL(10,2),
  currency CHAR(3),
  fx_rate DECIMAL(18,8),
  status TEXT,
  issued_at TIMESTAMP
);

payments (
  id UUID PK,
  invoice_id UUID,
  gateway TEXT,
  method TEXT,
  status TEXT
);

💳 Gateways
Moeda	Gateway
USD/EUR	Stripe
BRL	Pix
Outros	PayPal
2️⃣ Marketplace de Addons (Modelo SaaS real)
🧩 Conceito

Addon é produto independente

Pode ser:

Recorrente

One-shot

Atrelado a serviço

🗄 Modelo de dados
addons (
  id UUID PK,
  name TEXT,
  description TEXT,
  price_usd DECIMAL(10,2),
  billing_cycle TEXT,
  provisioner TEXT
);

service_addons (
  id UUID PK,
  service_id UUID,
  addon_id UUID,
  status TEXT,
  activated_at TIMESTAMP
);

🔄 Provisionamento

Cada addon → Job na Queue

Idempotente

Reversível (rollback)

💰 Billing

Pode gerar invoice própria

Ou agregar à fatura do serviço

3️⃣ 📐 ER FINAL (com FX + Addons)
USER
 ├── SERVICES
 │     ├── ADDONS
 │
 ├── INVOICES
 │     ├── PAYMENTS
 │
 ├── PRICING_PLANS
 ├── CURRENCIES
 └── EXCHANGE_RATES


✔ Pronto para:

Multi-empresa

Revenda

Auditoria

4️⃣ 🎨 Regras de Cores & Layout (estilo Vercel)
🎨 Paleta
Background: #000000
Surface: #0A0A0A
Border: #1A1A1A
Primary: #FFFFFF
Muted: #888888
Accent: #2563EB
Success: #16A34A
Error: #DC2626

📐 Layout

Grid 12 colunas

Espaçamento 8px / 16px / 24px

Cards simples, sem sombra pesada

Tipografia limpa (Inter)

🚫 Regras

❌ Nada centralizado sem motivo

❌ Nada “card decorativo”

❌ Nada de layout sem pedido

5️⃣ 📱 Wireframe – App Mobile Admin
🧭 Navegação
Dashboard
├── Servidores
├── Clientes
├── Faturas
├── Alertas
└── Configurações

📊 Dashboard

Status geral (UP/DOWN)

Faturas vencidas

Provisionamentos em fila

Alertas críticos

🔐 Segurança

MFA obrigatório

Sessão curta

Biometria

🧱 Stack

React Native + Expo

API pública

JWT + Refresh Token

6️⃣ ⚙️ Código Base – Marketplace (Next.js)
/app/marketplace/page.tsx
import { getAddons } from "@/services/addons";

export default async function Marketplace() {
  const addons = await getAddons();

  return (
    <div className="grid gap-4">
      {addons.map(addon => (
        <div key={addon.id} className="border p-4">
          <h3>{addon.name}</h3>
          <p>{addon.description}</p>
          <span>${addon.price_usd}</span>
        </div>
      ))}
    </div>
  );
}

/services/addons.ts
export async function getAddons() {
  return fetch("/api/addons").then(r => r.json());
}

7️⃣ 🛡 SOC 2 Type I – Templates Oficiais
📄 Documentos

Security Policy

Access Control Policy

Change Management

Incident Response

Backup & DR

Logging Policy

👉 Todos já compatíveis com o que você construiu

8️⃣ 🏛 ISO 27001 – Templates Oficiais
📦 Pacote mínimo

ISMS Scope

Risk Register

Asset Inventory

SoA (Statement of Applicability)

Supplier Security

Internal Audit Plan

✔ Pronto para auditoria Stage 1

🧠 Ordem correta de execução (sem retrabalho)

1️⃣ Billing multi-moeda
2️⃣ Marketplace
3️⃣ App mobile
4️⃣ SOC 2 Type I
5️⃣ ISO 27001