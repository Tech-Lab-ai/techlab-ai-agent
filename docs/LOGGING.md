# Logging – Dresbach Hosting

Este documento define como logs são criados, armazenados e utilizados.

---

## 🎯 Objetivo

- Auditoria
- Debug controlado
- Segurança
- Compliance

---

## 🗂 Tipos de Logs

- Auth (login/logout)
- Pagamentos
- Erros do sistema
- Ações críticas do cliente
- Ações administrativas

---

## 🧱 Estrutura de Log

Todo log deve conter:

- Timestamp
- Tipo
- Origem (API / serviço)
- Usuário (quando aplicável)
- Resultado (sucesso / erro)

---

## 🔐 Dados Sensíveis

Nunca registrar:
- Senhas
- Tokens
- Dados de cartão
- CPF / CNPJ

---

## 📦 Armazenamento

- Logs rotacionados
- Retenção definida
- Acesso restrito

---

## 🚫 Proibições

- console.log em produção
- Logs no frontend
- Logs sem contexto

---

## 📌 Regra Final

> Log é prova, não opinião.
