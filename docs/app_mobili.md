5️⃣ 📱 Wireframe – App Mobile Admin
🧭 Navegação
Dashboard
├── Servidores
├── Clientes
├── Faturas
├── Alertas
└── Configurações
📱 PARTE 1 — WIREFRAME DO APP MOBILE ADMIN

(desenhado tela por tela, pronto para Figma / implementação)

🎯 Objetivo do app

Admin / Ops

Monitorar

Provisionar

Intervir rápido

Zero distração visual (estilo Vercel)

🧭 Navegação Global (Bottom Tabs)
[ Dashboard ] [ Clientes ] [ Serviços ] [ Alertas ] [ Config ]


Regra:

Máx. 5 abas

Nada escondido em hamburger

🟦 TELA 1 — Login
┌────────────────────────────┐
│   Dresbach Hosting Admin   │
│                            │
│  Email                     │
│  [____________________]   │
│                            │
│  Senha                     │
│  [____________________]   │
│                            │
│  [ Entrar ]                │
│                            │
│  MFA obrigatório           │
└────────────────────────────┘


MFA após login

Sessão curta

Biometria opcional

🟦 TELA 2 — Dashboard (Home)
┌────────────────────────────┐
│ Status Geral               │
│ 🟢 Servidores OK (12)      │
│ 🔴 Incidentes (1)          │
│                            │
│ Provisionamentos           │
│ ⏳ Em fila: 3              │
│ ✔ Hoje: 27                 │
│                            │
│ Financeiro                 │
│ 💰 Faturas vencidas: 4     │
│                            │
│ [ Ver alertas críticos ]   │
└────────────────────────────┘


Regra:

Tudo resumido

Toque leva ao detalhe

🟦 TELA 3 — Clientes
┌────────────────────────────┐
│ Clientes                   │
│ 🔍 Buscar                  │
│ [____________________]   │
│                            │
│ João Silva                 │
│ 3 serviços | Ativo         │
│                            │
│ Maria Tech                 │
│ 12 serviços | Suspenso     │
└────────────────────────────┘

🟦 TELA 4 — Cliente (Detalhe)
┌────────────────────────────┐
│ Maria Tech                 │
│ Status: 🔴 Suspenso        │
│                            │
│ Serviços: 12               │
│ Faturas abertas: 2         │
│                            │
│ [ Ver serviços ]           │
│ [ Ver faturas ]            │
│ [ Ações ]                  │
└────────────────────────────┘

Ações rápidas:

Suspender tudo

Reativar

Forçar pagamento

Abrir ticket

🟦 TELA 5 — Serviços
┌────────────────────────────┐
│ Serviços                   │
│                            │
│ Hospedagem - site.com.br   │
│ 🟢 Ativo                   │
│                            │
│ VPS - loja.com             │
│ 🔴 Suspenso                │
└────────────────────────────┘

🟦 TELA 6 — Serviço (Detalhe)
┌────────────────────────────┐
│ site.com.br                │
│ Plano: Pro                 │
│ Servidor: srv-01           │
│                            │
│ Addons: SSL, Backup        │
│                            │
│ [ Provisionar ]            │
│ [ Suspender ]              │
│ [ Migrar ]                 │
│ [ Logs ]                   │
└────────────────────────────┘

🟦 TELA 7 — Alertas
┌────────────────────────────┐
│ Alertas                    │
│ 🔴 Servidor srv-02 DOWN    │
│ 🟡 Backup atrasado         │
│                            │
│ [ Resolver ]               │
└────────────────────────────┘

🟦 TELA 8 — Configurações
┌────────────────────────────┐
│ Configurações              │
│                            │
│ Usuários & RBAC            │
│ Integrações                │
│ Webhooks                   │
│ Segurança                  │
│ Logs                       │
└────────────────────────────┘

⚙️ PARTE 2 — PROVISIONAMENTO REAL WHM (API)

Agora infra real, sem mock.

🔌 Integração WHM — Conceito

Comunicação direta com WHM API 1

Token-based (root ou reseller)

Cada ação → Job assíncrono

🔐 Autenticação WHM
Criar token no WHM
WHM → Development → Manage API Tokens

Header padrão
Authorization: whm root:API_TOKEN

🧠 Fluxo real de provisionamento
Pedido pago
→ Queue (BullMQ)
→ Criar conta cPanel
→ Configurar plano
→ Criar DNS
→ Ativar serviço
→ Notificar cliente

🟦 Criar conta cPanel (API real)
Endpoint
POST https://SERVIDOR:2087/json-api/createacct

Payload
{
  username: "cliente123",
  domain: "site.com.br",
  password: "SenhaForte!",
  plan: "PRO",
  contactemail: "cliente@email.com"
}

Código (Node.js)
import axios from "axios";

export async function createCpanelAccount(data) {
  const res = await axios.post(
    "https://srv01.seudominio.com:2087/json-api/createacct",
    null,
    {
      params: data,
      headers: {
        Authorization: `whm root:${process.env.WHM_TOKEN}`,
      },
    }
  );

  return res.data;
}

🟦 Suspender conta
POST /json-api/suspendacct

{
  user: "cliente123",
  reason: "Fatura vencida"
}

🟦 Reativar conta
POST /json-api/unsuspendacct

🟦 Migrar conta cPanel → cPanel
POST /json-api/cpanel_migration


Campos:

host origem

usuário

senha ou token

conta destino

(Esse processo deve rodar em job dedicado com logs)

🧾 Logs obrigatórios (audit trail)
provisioning_logs (
  id UUID,
  service_id UUID,
  action TEXT,
  payload JSONB,
  result JSONB,
  status TEXT,
  created_at TIMESTAMP
);


✔ Imutável
✔ Auditável (SOC / ISO)

🔄 Queue (obrigatório)

BullMQ + Redis

1 job = 1 ação infra

Retry automático

Dead Letter Queue

🛡 Segurança mínima

Token WHM por servidor

Nunca expor IP público

IP whitelist

MFA no WHM

Logs fora do banco principal

🧠 O que você tem agora

✅ App mobile admin desenhado
✅ Fluxo WHM real (nível HostGator / Blesta)
✅ Base pronta para revenda
✅ Compatível com SOC 2 / ISO