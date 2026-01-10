Blueprint Visual – Next.js + Stripe
flowchart TB
%%================= SITE PÚBLICO =================

subgraph SITE[Site Público]
A1[Home] -->|CTA: Comprar / Assinar| A2[Página de Produto/Plano]
A2 -->|Botão: Pagar| CHECKOUT[Checkout Stripe]
A1 --> A3[Sobre / Empresa]
A1 --> A4[Contato / Suporte]
end

%%================= CHECKOUT =================

subgraph CHECKOUT[Checkout]
CHECKOUT -->|Stripe Elements| S1[Formulário de Pagamento]
S1 -->|API: POST /api/checkout| S2[PaymentIntent / SetupIntent]
S2 -->|client_secret| S1
S1 -->|Pagamento Concluído| WEBHOOK[Webhook Stripe]
WEBHOOK -->|Atualiza Pedido / Assinatura| CLIENTE
WEBHOOK -->|Aciona Provisionamento WHM| WORKER
WEBHOOK -->|Aciona Emissão NF| NF
end

%%================= ÁREA DO CLIENTE =================

subgraph CLIENTE[Área do Cliente]
C1[Dashboard] --> C2[Pedidos / Assinaturas]
C2 -->|GET /api/orders| StripeAPI[Stripe Customers/Subscriptions/Invoices]
C1 --> C3[Notas Fiscais]
C3 -->|GET /api/nf| NF
C1 --> C4[Configurações / Pagamento]
C4 -->|PATCH /api/customers| StripeAPI
C1 --> C5[Addons / Serviços Extras]
C5 -->|GET /api/addons| WORKER
end

%%================= PAINEL ADMIN / REVENDA =================

subgraph ADMIN[Painel Admin / Revenda]
AADM1[Dashboard Financeiro] -->|GET /api/reports| StripeReports[Reports API / Sigma / Dashboard API]
AADM2[Gestão de Produtos] -->|CRUD /api/products| StripeProducts[Products & Prices API]
AADM3[Gestão de Clientes] -->|CRUD /api/customers| StripeCustomers[Customers API]
AADM4[Gestão de Pedidos / Assinaturas] -->|GET /api/orders| StripeSubscriptions[Subscriptions API]
AADM5[Provisionamento WHM] -->|Worker BullMQ| WHMAPI[WHM API]
AADM6[Notas Fiscais] -->|GET /api/nf| NF
AADM7[Marketplace de Addons] -->|GET /api/addons| WORKER
ADMIN --> CLIENTE
end

%%================= WORKERS / BACKEND =================

subgraph WORKER[Worker / Backend]
W1[Provisionamento Automático] --> WHMAPI
W2[Emissão NF Automática] --> NF
W3[Processamento Addons] --> CLIENTE
end

%%================= NF / Nota Fiscal =================

subgraph NF[Notas Fiscais]
NF1[PDF / XML] --> CLIENTE
NF1 --> ADMIN
end

🔹 Explicação do Blueprint
1. Site Público

Página Home

Lista produtos, benefícios, CTA “Comprar / Assinar”

Página de Produto / Plano

Exibe preço, descrição, recursos

Botão → Checkout Stripe

Rotas Next.js: /, /produtos/[id], /sobre, /contato

2. Checkout

Stripe Elements: Cartão, PIX, boleto

Endpoints Next.js:

POST /api/checkout → cria PaymentIntent ou SetupIntent

POST /api/webhooks/stripe → recebe eventos (pagamento, falha, disputa)

Dados Stripe:

PaymentIntent.status

Subscription.status

Invoice.amount_due, Invoice.status

3. Área do Cliente

Dashboard: resumo de assinaturas, pagamentos, NF

Pedidos / Assinaturas:

Endpoint: GET /api/orders

Dados Stripe: Customer.subscriptions, PaymentIntent, Invoice

Notas Fiscais:

Endpoint: GET /api/nf

Dados: PDF / XML gerados, status de emissão

Configurações:

Endpoint: PATCH /api/customers

Dados Stripe: endereço, método de pagamento

Addons:

Endpoint: GET /api/addons

Ativa/desativa addons via worker

4. Painel da Empresa / Revenda

Dashboard Financeiro

Endpoint: GET /api/reports

APIs Stripe: Reports API, Sigma, Dashboard API

Gestão de Produtos / Planos

Endpoint: /api/products

API Stripe: Products & Prices API

Gestão de Clientes

Endpoint: /api/customers

API Stripe: Customers API

Gestão de Pedidos / Assinaturas

Endpoint: /api/orders

API Stripe: Subscriptions API

Provisionamento WHM

Worker BullMQ → WHM API

Notas Fiscais

Endpoint: /api/nf → PDF / XML

Marketplace de Addons

Worker processa ativação/desativação

Endpoint /api/addons

🔹 Observações

RBAC

Middleware Next.js protege rotas (/api/admin/*)

Perfis: Admin, Financeiro, Suporte, Revendedor

Worker

Processa filas: provisionamento, emissão de NF, ativação de addons

Webhook Stripe

Fundamental para atualizar assinaturas, pagamentos, falhas, reembolsos

Notas Fiscais

Emissão automática via SEFAZ ou API de NF-e

Multi-empresa / White-label

Cada revenda tem painel customizado

Recebe dados de repasse automático via Stripe Connect