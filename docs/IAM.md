# IAM – Identity and Access Management

Este documento define como identidades e permissões são gerenciadas.

---

## 🎯 Objetivo

- Garantir acesso mínimo necessário
- Evitar privilégios excessivos
- Proteger contas e dados

---

## 👤 Tipos de Usuários

- Visitante
- Cliente
- Administrador
- Sistema (serviços internos)

---

## 🔐 Autenticação

- Login por email e senha
- Tokens com expiração
- Cookies HttpOnly
- Possibilidade futura de MFA

---

## 🧱 Autorização

- Controle por papel (RBAC)
- Validação server-side obrigatória
- APIs protegidas por middleware

---

## 🔍 Auditoria de Acesso

- Login bem-sucedido
- Tentativas falhas
- Logout
- Ações administrativas

---

## 🚫 Proibições

- Acesso direto ao banco
- Compartilhar credenciais
- Hardcode de permissões

---

## 📌 Regra Final

> Acesso é poder. Controle é obrigação.
