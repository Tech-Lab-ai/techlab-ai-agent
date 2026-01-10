# Dresbach Hosting – Plataforma Web

Este projeto representa o site oficial e os sistemas da **Dresbach Hosting do Brasil Ltda**, incluindo
área institucional, área do cliente e painel administrativo.

## 🎯 Objetivo do Projeto
Fornecer uma plataforma sólida para:
- Apresentação dos serviços
- Gestão de clientes
- Administração interna
- Contratação e gerenciamento de produtos

## 🧱 Estrutura Geral

/ (raiz do projeto)
├── app/                → Rotas e páginas
├── components/         → Componentes reutilizáveis
├── area-do-cliente/    → Interface do cliente final
├── administracao/      → Painel administrativo interno
├── lib/                → Integrações e serviços externos
├── hooks/              → Hooks customizados
├── styles/             → Estilos globais
├── public/             → Assets públicos
└── README.md           → Documentação geral

## 🧩 Padrões de Desenvolvimento
- Componentização obrigatória
- Nenhuma alteração fora do escopo solicitado
- Layout só muda com autorização explícita
- Código criado somente quando necessário

## 🔐 Segurança
- Dados sensíveis nunca ficam no frontend
- Tokens e chaves apenas no backend
- Variáveis de ambiente via `.env`

## 📌 Observação Importante
Este projeto segue regras rígidas de desenvolvimento.
Qualquer alteração fora do pedido explícito deve ser desfeita.

## 📄 Licença
Projeto proprietário – uso exclusivo da Dresbach Hosting
