# Multi-Tenancy – Dresbach Hosting

Este documento define como múltiplos clientes coexistem com segurança.

---

## 🎯 Objetivo

- Isolamento de dados
- Escalabilidade
- Segurança
- Controle total

---

## 🧠 Modelo de Tenancy

Modelo adotado:
- Tenant por cliente
- Isolamento lógico via `tenant_id`

---

## 🗂 Banco de Dados

Todas as tabelas críticas devem conter:
- tenant_id
- user_id

---

## 🔐 Segurança

- Um tenant não acessa outro
- Validação em todas as APIs
- Autorização server-side

---

## 📊 Escalabilidade

- Possibilidade de shards futuros
- Migração por tenant
- Backup isolado

---

## 🚫 Proibições

- Queries sem tenant_id
- Compartilhamento de dados
- Cache global sem chave de tenant

---

## 📌 Regra Final

> Multi-tenancy mal feito é vazamento anunciado.
