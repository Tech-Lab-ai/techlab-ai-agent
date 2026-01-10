# Observabilidade – Dresbach Hosting

Este documento define como o sistema é monitorado, analisado e auditado.
Observabilidade não é opcional.

---

## 🎯 Objetivos

- Detectar falhas rapidamente
- Entender comportamento do sistema
- Antecipar problemas
- Reduzir tempo de indisponibilidade (MTTR)

---

## 📊 Pilares da Observabilidade

1. Logs
2. Métricas
3. Traces

---

## 📈 Métricas Monitoradas

- Tempo de resposta das APIs
- Erros por rota
- Falhas de autenticação
- Tentativas inválidas de login
- Erros de pagamento (Stripe)
- Latência do banco

---

## 🔍 Monitoramento

- APIs críticas monitoradas
- Autenticação
- Checkout
- Área do Cliente

---

## 🚨 Alertas

Alertas devem ser acionados quando:
- Erros 5xx aumentarem
- Pagamento falhar em massa
- Banco ficar indisponível
- API ultrapassar timeout

---

## 🚫 Proibições

- Logs excessivos em produção
- Logs sensíveis
- Monitoramento no frontend

---

## 📌 Regra Final

> O que não é observável não é confiável.
