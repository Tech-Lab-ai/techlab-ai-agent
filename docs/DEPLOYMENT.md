# Deploy – Dresbach Hosting

Este documento descreve como o sistema é colocado em produção.

---

## 🌎 Ambientes

- Desenvolvimento (local)
- Produção (cPanel / VPS)

---

## ⚙️ Variáveis de Ambiente

Todas devem estar no `.env`:

```env
DATABASE_URL=
STRIPE_SECRET_KEY=
NEXTAUTH_SECRET=
Nunca versionar .env.

🏗 Build
npm install
npm run build
npm run start

🚫 Proibições em Produção

TurboPack ativo

Console.log

Debug

Hot reload

🔁 Atualizações

Deploy sempre manual ou pipeline

Nunca alterar direto no servidor

Versionamento obrigatório

📌 Regra de Deploy

Código em produção é código estável.


---

# 🧪 docs/TESTING.md

```md
# Testes – Dresbach Hosting

Este projeto prioriza estabilidade acima de velocidade.

---

## 🧠 Filosofia de Testes

- Testar o essencial
- Não testar UI estética
- Testar regras de negócio

---

## 🧪 Tipos de Testes

- Testes manuais (fluxos críticos)
- Testes de API
- Testes de autenticação
- Testes de pagamento (Stripe sandbox)

---

## ✅ Fluxos Obrigatórios

- Login
- Cadastro
- Checkout
- Área do Cliente
- Cancelamento

---

## 🚫 O que não testar

- Estilo visual
- Animações
- Layout

---

## 📌 Regra de Teste

> Funcionar é mais importante que parecer bonito.