.

🛠 Painel de Administração (Admin Panel)

Equivalente funcional ao WHM (WebHost Manager)

O Painel de Administração é o núcleo operacional da plataforma de hospedagem.
Ele é responsável por gerenciar infraestrutura, clientes, serviços, faturamento e segurança, sem interferir no painel do cliente final.

🔑 Regra-chave:
Admin controla o sistema e os clientes
Cliente controla apenas seus próprios serviços

🧠 Visão Geral (WHM na prática)

No WHM original, o administrador consegue:

Criar e gerenciar contas cPanel

Controlar recursos do servidor

Definir limites, pacotes e políticas

Gerenciar DNS, emails, segurança e backups

Monitorar uso e abusos

Seu painel deve replicar isso em camadas, não tudo misturado.

📂 MÓDULOS DO PAINEL DE ADMINISTRAÇÃO
1️⃣ Gestão de Clientes (Account Management)

Equivalente WHM:

List Accounts

Create a New Account

Terminate / Suspend Account

Funções:

Criar cliente

Editar dados cadastrais

Ativar / suspender / encerrar cliente

Associar cliente a planos

Histórico do cliente (auditoria)

📌 Admin vê todos os clientes
📌 Cliente vê apenas a própria conta

2️⃣ Gestão de Planos (Packages)

Equivalente WHM:

Add a Package

Edit a Package

Delete a Package

Funções:

Criar planos de hospedagem

Definir limites:

Espaço em disco

Transferência

Quantidade de domínios

Contas de email

Bancos de dados

Ativar/desativar planos

📌 Planos nunca são editados diretamente no cliente
📌 Mudança de plano impacta contas associadas

3️⃣ Gestão de Serviços (Service Provisioning)

Equivalente WHM:

Account Functions

Modify Account

Upgrade/Downgrade

Funções:

Provisionar hospedagem automaticamente

Alterar plano

Renovar serviços

Cancelar serviços

Suspender por inadimplência

Reativar após pagamento

📌 Integrado ao faturamento
📌 100% automatizável (cron + webhooks)

4️⃣ Gestão de Domínios & DNS

Equivalente WHM:

DNS Functions

Edit DNS Zone

Add Zone

Delete Zone

Funções:

Associar domínio ao cliente

Criar zonas DNS

Gerenciar registros:

A

CNAME

MX

TXT

Nameservers personalizados

Integração com Registro.br (futuro)

📌 Admin define política
📌 Cliente edita apenas o próprio DNS (se permitido)

5️⃣ Faturamento & Financeiro (Billing)

Equivalente no WHM:
➡️ WHM não faz isso → Blesta / WHMCS fazem

Funções:

Criar faturas

Controlar vencimentos

Aplicar suspensões automáticas

Cancelar serviços

Reembolsos

Cupons

Integração com:

Stripe

Pix

Boleto

PayPal

📌 Financeiro nunca fica no painel do cliente admin
📌 Logs obrigatórios (LGPD + auditoria)

6️⃣ Segurança & Compliance 🔒

Equivalente WHM:

Security Center

IP Blocker

CSF / Firewall

Funções:

Controle de IP

Bloqueio por abuso

Rate limit

Logs de login

2FA (Admin obrigatório)

Gestão de permissões (RBAC)

📌 Toda ação administrativa deve gerar log
📌 LGPD exige rastreabilidade

7️⃣ Monitoramento & Logs 📊

Equivalente WHM:

Server Status

Service Status

Bandwidth Usage

Funções:

Monitorar:

CPU

Memória

Disco

Serviços

Logs de:

Erros

Acessos

Alterações administrativas

Alertas automáticos

📌 Logs não são editáveis
📌 Retenção definida em DATA_RETENTION.md

8️⃣ Automação & Integrações ⚙️

Equivalente WHM:

API Tokens

Remote Access

Funções:

Webhooks

APIs internas

Integração com:

Servidores

Gateways

Painéis externos

Rotinas automáticas:

Suspensão

Backup

Renovação

📌 Admin controla permissões de API
📌 Tokens com escopo limitado

9️⃣ Administração do Sistema (Root Level)

Equivalente WHM:

Basic WebHost Manager Setup

Tweak Settings

Funções:

Configurações globais

Feature flags

Limites globais

Idiomas

Branding

Manutenção do sistema

📌 Acesso restrito
📌 Normalmente só super-admin

🧩 DIFERENÇA ENTRE PAINÉIS (IMPORTANTE)
Painel	Quem usa	O que controla
Admin (WHM-like)	Empresa	Clientes, planos, sistema
Cliente (cPanel-like)	Cliente final	Sites, emails, domínios
Financeiro	Sistema	Pagamentos, faturas

👉 Nunca misturar responsabilidades

🏗 ARQUITETURA RECOMENDADA (RESUMO)
/admin
  ├─ clientes
  ├─ planos
  ├─ serviços
  ├─ faturamento
  ├─ dns
  ├─ segurança
  ├─ logs
  ├─ sistema


Cada módulo:

Componentes próprios

Serviços próprios

Permissões próprias

Logs próprios