# Rollback – Dresbach Hosting

Este documento define como reverter versões em produção com segurança.

---

## 🎯 Objetivo

- Reduzir impacto de falhas
- Restaurar estabilidade rapidamente

---

## 🧭 Quando Executar Rollback

- Erro crítico em produção
- Falha de autenticação
- Quebra de checkout
- Indisponibilidade geral

---

## 🔁 Estratégia

- Versionamento obrigatório
- Builds identificáveis
- Deploy reversível

---

## 🗄 Banco de Dados

- Backup antes de migração
- Nunca rollback de schema sem análise
- Dados são prioridade

---

## 🚨 Procedimento

1. Identificar versão estável
2. Interromper novos deploys
3. Restaurar build anterior
4. Validar fluxos críticos
5. Comunicar status

---

## 🚫 Proibições

- Rollback parcial
- Alteração direta em produção
- Apagar dados para “corrigir”

---

## 📌 Regra Final

> Rollback rápido salva empresas.
