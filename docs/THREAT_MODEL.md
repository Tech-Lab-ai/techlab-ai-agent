# Threat Model – Dresbach Hosting

Este documento identifica ameaças e estratégias de mitigação.

---

## 🎯 Objetivo

- Antecipar riscos
- Reduzir superfícies de ataque
- Proteger clientes e sistema

---

## 🧱 Superfícies de Ataque

- Painel web
- APIs públicas
- Autenticação
- Webhooks
- Infraestrutura

---

## ⚠️ Principais Ameaças

- SQL Injection
- XSS
- CSRF
- Credential stuffing
- Abuso de API
- Ataques DDoS

---

## 🛡 Mitigações

- Validação server-side
- Tokens CSRF
- Rate limiting
- Logs e alertas
- Princípio do menor privilégio

---

## 🔄 Revisão

- Revisado a cada grande mudança
- Atualizado após incidentes

---

## 📌 Regra Final

> Se você não modela a ameaça, ela modela você.
