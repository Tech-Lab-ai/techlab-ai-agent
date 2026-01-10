# Painel de Administração – Dresbach Hosting

Este painel é de uso **interno** e restrito à equipe administrativa da Dresbach Hosting.

## 🎯 Objetivo
Permitir a gestão completa da plataforma:
- Clientes
- Produtos
- Planos
- Faturas
- Infraestrutura
- Configurações do sistema

## 🧱 Estrutura Interna

administracao/
├── pages/          → Telas administrativas
├── components/     → Componentes exclusivos do admin
├── services/       → Integrações administrativas
├── hooks/          → Lógica de controle e estado
└── README.md       → Documentação do painel

## 🔒 Acesso
- Área protegida por autenticação
- Apenas usuários autorizados
- Logs de ações administrativas

## 📦 Regras de Desenvolvimento
- Componentização obrigatória
- Nenhuma alteração visual sem solicitação
- Nenhuma lógica duplicada
- Código claro e rastreável

## ❌ Proibições
- Não reaproveitar componentes do cliente sem validação
- Não expor dados sensíveis no frontend
- Não criar funcionalidades não solicitadas

## 📌 Observação
Este painel possui **nível crítico** de impacto.
Qualquer erro pode afetar clientes e faturamento.
Alterações devem seguir rigorosamente as regras do projeto.
