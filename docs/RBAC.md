🔐 RBAC — Perfis e Permissões (Role-Based Access Control)
🎭 Perfis do Sistema
1️⃣ SUPER_ADMIN

Dono do sistema / Root

Permissões:

Acesso total a todos os módulos

Criar/remover admins

Alterar configurações globais

Gerenciar servidores

Ver logs imutáveis

Acessar dados sensíveis (LGPD)

📌 Quantidade: mínimo possível
📌 2FA obrigatório

2️⃣ ADMIN

Operacional

Permissões:

Gerenciar clientes

Criar planos

Provisionar serviços

Suspender / reativar contas

Ver faturamento (sem alterar pagamentos)

Gerenciar DNS

Ver logs operacionais

❌ Não pode:

Excluir sistema

Alterar configs críticas

Ver segredos/token raiz

3️⃣ FINANCEIRO

Faturamento

Permissões:

Criar faturas

Ver pagamentos

Aplicar créditos

Reembolsos

Cupons

Relatórios financeiros

❌ Não pode:

Criar clientes

Alterar serviços

Gerenciar servidores

4️⃣ SUPORTE

Atendimento

Permissões:

Visualizar clientes

Visualizar serviços

Resetar senha

Abrir/fechar tickets

Ver logs básicos

❌ Não pode:

Excluir nada

Ver dados financeiros sensíveis

5️⃣ CLIENTE

Usuário final

Permissões:

Gerenciar seus serviços

Domínios/DNS próprios

Abrir tickets

Ver faturas

Realizar pagamentos

❌ Nunca vê:

Outros clientes

Configuração do sistema

Logs globais

🧩 Modelo RBAC (Técnico)
Role {
  id
  name
  permissions: string[]
}


Exemplo:

permissions = [
  "client.read",
  "client.write",
  "service.provision",
  "invoice.read",
  "dns.manage"
]


📌 Tudo por permissão granular
📌 Nada de if admin === true

🧩 MAPA DE API ENDPOINTS (Core)
🔐 Autenticação
POST   /api/auth/login
POST   /api/auth/logout
POST   /api/auth/refresh
GET    /api/auth/me

👤 Clientes
GET    /api/clients
POST   /api/clients
GET    /api/clients/:id
PUT    /api/clients/:id
DELETE /api/clients/:id

📦 Planos
GET    /api/plans
POST   /api/plans
PUT    /api/plans/:id
DELETE /api/plans/:id

🛠 Serviços
POST   /api/services/provision
POST   /api/services/suspend
POST   /api/services/reactivate
POST   /api/services/cancel
GET    /api/services/:id

🌐 Domínios / DNS
POST   /api/domains/check
POST   /api/domains
GET    /api/domains/:id
PUT    /api/domains/:id/dns

💳 Faturamento
GET    /api/invoices
POST   /api/invoices
POST   /api/payments/stripe/webhook
POST   /api/payments/pix

📊 Logs
GET    /api/logs/audit
GET    /api/logs/security


📌 Logs somente leitura

🔄 FLUXO COMPLETO
Pedido → Pagamento → Provisionamento
🟢 1. Pedido
Cliente escolhe plano
→ verifica domínio
→ cria pedido (status: pending)

🟡 2. Pagamento
Pedido gera fatura
→ cliente paga
→ gateway confirma (webhook)
→ fatura = paid


📌 Webhook é quem manda, não o front

🔵 3. Provisionamento
Sistema detecta pagamento
→ cria serviço
→ cria conta no servidor
→ cria DNS
→ envia email de boas-vindas


📌 Tudo assíncrono
📌 Falhou? → retry + log

🔴 4. Inadimplência
Vencimento
→ +7 dias: suspende
→ +20 dias: remove serviço

📦 COMPARATIVO
WHM vs Seu Painel
Função	WHM	Seu Painel
Criar contas	✅	✅
Gerenciar planos	✅	✅
Faturamento	❌	✅
Pagamentos online	❌	✅
Multi-tenant	❌	✅
RBAC moderno	❌	✅
API REST	⚠️ limitada	✅
LGPD	❌	✅
UI moderna	❌	✅
Automação	⚠️	✅

👉 WHM é servidor
👉 Nosso painel é plataforma SaaS