# Área do Cliente – Dresbach Hosting

Esta pasta contém toda a interface utilizada pelo **cliente final** da Dresbach Hosting.

## 🎯 Objetivo
Permitir que o cliente:
- Visualize seus serviços
- Acompanhe faturas
- Gerencie dados da conta
- Acesse suporte
- Controle produtos contratados

## 🧱 Estrutura Interna

area-do-cliente/
├── pages/          → Páginas acessíveis ao cliente
├── components/     → Componentes exclusivos da área do cliente
├── services/       → Consumo de APIs
├── hooks/          → Lógica de estado do cliente
└── README.md       → Documentação da área

## 📦 Componentização
- Todos os botões, cards, formulários e tabelas devem ser componentes
- Nenhum JSX duplicado
- Nenhum botão inline

## ❌ Restrições
- Não alterar layout sem pedido
- Não incluir funcionalidades extras
- Não mexer em CSS global
- Não refatorar código fora do escopo solicitado

## 🔐 Segurança
- Cliente nunca acessa lógica administrativa
- Dados sensíveis protegidos via backend
- Sessão controlada por autenticação segura

## 📌 Observação
Esta área é voltada exclusivamente ao **uso do cliente final**.
Qualquer regra administrativa deve ser tratada no backend ou painel admin.
