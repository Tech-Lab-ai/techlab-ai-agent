Prompt Executável Avançado – Desenvolvimento MyWay

Objetivo: A IA deve ler toda a seção doc dos READMEs, absorver regras de negócio, fluxos, integrações, endpoints e funcionalidades, e gerar automaticamente o blueprint, ER final, wireframes, rotas, componentes, workers, APIs e código base inicial para o site público, checkout, área do cliente e painel admin (white-label, revenda, Stripe, WHM, emissão de NF, marketplace de addons).

1️⃣ Instruções Gerais

Leia toda a seção doc dos READMEs fornecidos.

Absorva fluxos de negócios, regras de pagamento, revenda, white-label, provisão WHM, Stripe, NF 2026, Pix, multi-moeda, períodos de teste, repasses, addons e RBAC.
diagram visual do projeto para olhar D:\AREA DEV\dresbachhosting\public\images\diagrama visual.png
Crie um modelo completo de banco de dados (ER final) incluindo:

Usuários (clientes, revendedores, admins)

Produtos / Planos

Assinaturas / Pedidos

Faturas / NF

Logs / audit trail

Workers (BullMQ/Redis)

Addons / marketplace

Fluxos Stripe e WHM (IDs, status, webhooks)

2️⃣ Blueprint de Páginas + Rotas
Site Público

Home: landing com planos, destaques e CTA para cadastro

Planos: listagem de planos e comparativo

Checkout:

Stripe Elements (cartão, Pix, multi-moeda)

Webhooks para atualizar pedidos / assinaturas

Endpoint: POST /api/checkout/create-payment-intent

Endpoint: POST /api/checkout/webhook

Sobre / Contato / FAQ / Política de Privacidade / Antispam

Área do Cliente

Dashboard: resumo financeiro, planos ativos, status do servidor

Pedidos / Assinaturas: histórico, renovação, cancelamento

Notas Fiscais: emissão e download PDF/XML

Addons / Serviços extras: integração marketplace

Configurações: dados pessoais, métodos de pagamento, segurança

Painel Admin / Revenda

Dashboard Financeiro: gráficos usando Reports API / Sigma / Dashboard API

Gestão de Clientes: CRUD de clientes / revendas / contas WHM

Gestão de Produtos e Planos: criação, edição e ativação

Provisionamento WHM: endpoints createAccount, suspendAccount, terminateAccount, logs de status

Marketplace de Addons: integração com API interna

Notas Fiscais: emissão automática NF conforme regra 2026, status de pagamento, links de download

3️⃣ Estrutura de Código

Frontend Next.js (React):

Pages + Components

Stripe Elements / Checkout / Webhooks

Área do cliente / Painel revenda / Marketplace

Backend (API Routes Next.js / Node.js):

CRUD de clientes, pedidos, planos, NF, addons

RBAC middleware para proteger rotas

Workers BullMQ/Redis para provisionamento, emissão NF, logs

Integração com Stripe e WHM

Workers (BullMQ/Redis):

Provisionamento cPanel / WHM

Repasses automáticos Stripe a cada 5 dias

Backups, monitoramento, execução assíncrona de tarefas

4️⃣ Integrações Técnicas
Stripe

Endpoints principais:

POST /v1/payment_intents → criar pagamento

POST /v1/setup_intents → salvar métodos de pagamento

GET /v1/customers/:id → dados cliente

GET /v1/subscriptions/:id → status assinatura

Webhooks: invoice.paid, payment_intent.succeeded, charge.failed, subscription.updated

Usar Reports API / Sigma / Dashboard API para métricas e gráficos no painel admin

Repasses: calcular e executar automaticamente a cada 5 dias

WHM / cPanel

Endpoints principais:

createacct → criar conta revenda

suspendacct → suspender conta

removeacct → deletar conta

listaccts → listar contas existentes

Logs de status em banco, triggers para workers

Notas Fiscais 2026

Emissão PDF/XML automática conforme vendas

Endpoint interno POST /api/nf/generate

Relacionar NF a pedidos / assinaturas / repasses Stripe

5️⃣ Segurança e Compliance

RBAC (roles: admin, revendedor, cliente) em middleware Next.js

JWT + CSRF + rate-limit

Logs imutáveis e audit trail para todas as operações

LGPD, ISO 27001 readiness, SOC 2 Type I

6️⃣ Output esperado da IA

ER final do banco de dados incluindo todos módulos e integrações

Diagrama visual tipo Figma / Draw.io: páginas, rotas, endpoints, dados Stripe/WHM/NF

Wireframes mobile + web

Código base inicial Next.js com:

Páginas públicas + checkout

Área do cliente

Painel admin / revenda

Workers BullMQ / Redis

Integração Stripe / WHM / NF

RBAC pronto para uso

README técnico detalhando endpoints, fluxos, workers, RBAC, integrações



Domínio master: dresbachhosting.com.br
Usuário: dresbach
Senha: mXI[Yt3kv:8D11
Plano Contratado: Rev. Ilimitada SSD Turbo MAX com Backup Diário e Semanal. Interno e Externo.


In

Informações DNS particulares:
ns1.dresbachhosting.com.br 199.167.147.66
ns2.dresbachhosting.com.br 199.167.147.67
ns3.dresbachhosting.com.br 199.167.147.68
ns4.dresbachhosting.com.br 199.167.147.69

Painel de controle via NOME DO DOMÍNIO  (Após os DNS propagarem): 
Painel de controle cPanel:  https://www.dresbachhosting.com.br/cpanel
Web Host Manager WHM:   https://www.dresbachhosting.com.br/whm
A porta SMTP é 26. A porta 25 está sendo fechada por todos provedores.
3) A porta POP é 110
4) Tenha certeza que está marcado MEU SERVIDOR REQUER AUTENTICAÇÃO
5) Se for usar SSL / TSL para email, então as portas são 587 para SMTP e 995 para POP


Servidor POP e STMP após criada a conta de email:
Servidor de email POP3: mail.dresbachhosting.com.br
Servidor de email SMTP: mail.dresbachhosting.com.br
Usuário: o email completo (exemplo voce@seudominio.com.br).
Senha: a senha que você definiu ao criar a conta de email.
  api whm  token  N3TR7AYRMN48T2KSHXZK9ND4VCN15OK9   
  Privilégios
Initial PrivilegesBasic Privileges
Account Summary acct-summary
Basic System Information basic-system-info
Basic WHM Functions basic-whm-functions
Configure connected external applications connected-applications
Allow CORS HTTP Requests cors-proxy-get
Perform cPanel API and UAPI functions through the WHM API cpanel-api 
Manage cPanel Integration Links cpanel-integration
Create User Session create-user-session 
Autenticação resumida digest-auth
Generate Mobile Email Configurations generate-email-config
List Packages list-pkgs
Manage API Tokens manage-api-tokens 
Manage DNS Records manage-dns-records
Manage OpenID Connect manage-oidc
Manage Styles manage-styles
MySQL Information mysql-info
Nameserver Configuration ns-config
Public Contact Information public-contact
SSL Information ssl-info
Track Email track-email
Informações da contaStandard Privileges
Listar contas list-accts
View Account Bandwidth Usage show-bandwidth
Gerenciamento de contasStandard Privileges
Create Accounts create-acct
Terminate Accounts kill-acct
Suspend/Unsuspend Accounts suspend-acct
Upgrade/Downgrade Accounts upgrade-account
Edit MX Entries edit-mx
Change Passwords passwd 
DNSStandard Privileges
Adicionar registro DNS create-dns
Remove DNS Zones kill-dns
Park DNS Zones park-dns
Editar zona DNS edit-dns
PacotesStandard Privileges
Add/Remove Packages add-pkg
Editar pacotes edit-pkg
TroubleshootingStandard Privileges
Troubleshoot Mail Delivery mailcheck
cPanel ManagementStandard Privileges
News Modification news
Package CreationPackage Privileges
Create Packages with Addon Domains allow-addoncreate
Create Packages with Parked (Alias) Domains allow-parkedcreate
Create Packages with Unlimited Features (for example, email accounts) allow-unlimited-pkgs
Create Packages with Unlimited Disk Usage allow-unlimited-disk-pkgs 
Create Packages with Unlimited Bandwidth allow-unlimited-bw-pkgs 
Informações do servidorGlobal Privileges
View Server Status status
View Server Information stats
TroubleshootingGlobal Privileges
Resynchronize FTP Passwords resftp
Gerenciamento de contasSuper Privileges
Bandwidth Limit Modification limit-bandwidth 
Modificação de cota quota 
Set an Account to be a Demo Account demo-setup


GEMINI_API_KEY=AIzaSyBRN1y8btyk_UbzNWCLO1XdChUQT7dsCO4
STRIPE_SECRET_KEY=mk_1SIs5XQsAXznVgRsD4WdzA7f

# Webhook Instantâneo (payload completo)
STRIPE_WEBHOOK_SECRET_FULL=whsec_N0cSm09ElpZ8NWaglS1L8cMxpDmMsvdk

# Webhook Mínimo (payload resumido)
STRIPE_WEBHOOK_SECRET_MINIMAL=whsec_RWLSLrESgiysgx4pBtgYO3EiUHIfX0OE

# administraçao-Webhook
STRIPE_WEBHOOK_SECRET_DASHBOARD=whsec_WmViMvWD5GZYoK9mMpCL5xMlX13CpXNS
Username
dresbach
Hostname
server.vipreseller30ssd.com
OS
CloudLinux v8.10.0 STANDARD standard
STRIPE_PUBLISHABLE_KEY=pk_live_51SIrQtQsAXznVgRsqKvOb8m2dWklpetKLaIDaA1aYetFKaUmGaGlOXmsNhPB9ESrrYtCgwfQty7QuY0v6jIz3L9r0011J2tGsN




User Analytics ID:   8f6bd32f-2b73-47a4-a497-d63912742b16
