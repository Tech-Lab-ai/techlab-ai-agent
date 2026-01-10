# Política de Segurança – Dresbach Hosting

Este documento define as regras de segurança do projeto.

---

## 🔑 Credenciais e Secrets

- Nunca versionar:
  - Senhas
  - Tokens
  - API Keys
  - Chaves privadas
- Usar apenas `.env` ou variáveis do servidor
- Nunca expor dados sensíveis no frontend

---

## 🛡 Backend é Soberano

- Toda validação crítica ocorre no backend
- Frontend nunca decide permissões
- Tokens devem ser validados no servidor

---

## 🧪 Dependências

- Não instalar libs sem necessidade
- Não usar pacotes abandonados
- Atualizações só quando solicitadas

---

## 🚫 Proibições

- Hardcode de dados sensíveis
- Logs com informações privadas
- Debug em produção

---

## 📣 Reporte de Vulnerabilidades

Qualquer falha deve ser reportada **privadamente** ao responsável do projeto.
