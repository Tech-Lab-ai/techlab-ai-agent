# Arquitetura do Projeto – Dresbach Hosting

Este documento define a arquitetura oficial do sistema.
Ela **não deve ser alterada** sem decisão formal registrada.

---

## 🧱 Stack Principal

- Frontend: Next.js (App Router)
- Backend: Next.js API Routes
- ORM: Prisma
- Banco de Dados: MySQL (cPanel)
- Pagamentos: Stripe
- Auth: Session / Token (Server-side)

---

## 🗂 Estrutura de Pastas (Resumo)

```txt
app/
├── (site)        → Site público
├── (auth)        → Login / Cadastro
├── (cliente)     → Área do Cliente
├── api/           → Backend / APIs
components/
├── site/
├── auth/
├── cliente/
🧩 Princípios Arquiteturais

Frontend não acessa banco

Toda regra de negócio fica no backend

Componentes são reutilizáveis

Nada é feito “rápido”, tudo é feito correto

🔐 Separação de Responsabilidades
Camada	Responsabilidade
UI	Exibir dados
Componentes	Reuso e padrão
API	Regras de negócio
DB	Persistência
🚫 Proibições Arquiteturais

SQL direto no frontend

Lógica de negócio em componentes

Componentes gigantes

Acoplamento entre painéis

📌 Regra Final

Arquitetura não se discute em código, apenas em decisão documentada.


---

# 🧠 docs/DECISIONS.md (ADR)

```md
# Decisões Arquiteturais (ADR)

Este documento registra decisões técnicas irreversíveis ou estratégicas.

---

## ADR-001 – Uso do Next.js App Router

**Status:** Aprovado  
**Motivo:**  
- Escalabilidade
- Server Components
- SEO nativo

**Consequência:**  
- Estrutura baseada em pastas
- Separação clara de rotas

---

## ADR-002 – Banco de Dados no cPanel

**Status:** Aprovado  
**Motivo:**  
- Redução de custos
- Controle total
- Integração direta com hospedagem

**Consequência:**  
- Prisma configurado para MySQL
- Backup sob responsabilidade do servidor

---

## ADR-003 – UI não é refatorável sem pedido

**Status:** Obrigatório  
**Motivo:**  
- Consistência visual
- Redução de retrabalho
- Controle de escopo

---

## 📌 Regra de ADR

> Nenhuma decisão nova entra sem ser registrada aqui.