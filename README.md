# WA-Desktop-Panel

Painel desktop profissional para operação de atendimentos via WhatsApp, com foco em automação, controle humano, relatórios, contratos e conformidade LGPD.

Este projeto **NÃO é um site público**.  
Ele foi projetado para rodar como **aplicação desktop (Electron)**, usando **Next.js** como frontend SPA.

> ⚠️ Importante:  
> O bot de WhatsApp, a IA e o backend **estão em outro repositório**.  
> Este repositório contém **somente o painel desktop**.

---

## 🧠 Visão Geral

O WA-Desktop-Panel é o centro operacional do sistema, permitindo:

- Operar conversas do WhatsApp em tempo real
- Alternar entre bot automático e atendimento humano
- Visualizar clientes, relatórios, contratos e pagamentos
- Gerenciar IA, fluxos do bot e segurança
- Gerar PDFs e documentos
- Garantir conformidade com LGPD
- Atualizações versionadas do software

---

## 🧱 Arquitetura

- **Frontend:** Next.js (App Router)
- **Linguagem:** TypeScript
- **UI:** React Components
- **Estilo:** CSS Modules + Design Tokens
- **Layout:** Inspirado no WhatsApp Desktop/Web
- **Destino final:** Electron (Windows Desktop)
- **Comunicação:** API REST (backend externo)

Não existem páginas HTML individuais.  
Todo o sistema funciona como **SPA** com **1 layout raiz**.

---

## 📁 Estrutura de Pastas (resumo)

src/
├─ app/
│ ├─ login/
│ ├─ dashboard/
│ ├─ chat/
│ ├─ clients/
│ ├─ reports/
│ ├─ contracts/
│ ├─ payments/
│ ├─ bot/
│ ├─ settings/
│ └─ about/
│
├─ components/
│ ├─ layout/
│ ├─ chat/
│ ├─ dashboard/
│ └─ ui/
│
├─ services/
├─ store/
└─ styles/


---

## 🔐 Autenticação

- Tela de login obrigatória
- Usuário e senha validados via backend
- Sem acesso parcial
- Sem menu antes do login
- Sem QR Code antes da autenticação

---

## 💬 Chat (WhatsApp)

O módulo de chat segue **o padrão visual do WhatsApp Web/Desktop**, com:

- Lista de conversas
- Janela de mensagens
- Bolhas de texto
- Envio de PDF/contrato
- Estado do bot (ativo/pausado)
- Handoff para atendimento humano
- QR Code quando não conectado

---

## 📊 Dashboard

- Indicadores operacionais
- Status do bot
- Status do WhatsApp
- Status do banco de dados
- Gráficos e métricas

---

## 🎨 Design System

Paleta baseada no WhatsApp:

- Verde principal: `#25D366`
- Verde secundário: `#128C7E`
- Fundo: `#F0F2F5`
- Sidebar: `#E4E6EB`
- Texto principal: `#050505`

Cores são definidas via **CSS Variables globais**.

---

## 🚫 O que este projeto NÃO é

- ❌ Não é site público
- ❌ Não é backend
- ❌ Não contém lógica do bot
- ❌ Não contém integrações diretas com WhatsApp Web
- ❌ Não usa múltiplos HTML

---

## 🔗 Integração com o Bot

O painel se comunica com:
- Backend/Bot (repositório separado)
- API de IA
- Banco de dados
- Serviços de pagamento
- Serviços de assinatura

A integração é feita via **API**.

---

## 📦 Build Desktop (futuro)

Este painel foi projetado para ser empacotado com:

- **Electron**
- **electron-builder**
- Atualizações automáticas
- Instalador Windows (.exe)

---

## 📜 Licença

Licença proprietária / definida pelo projeto principal.

---

## ✅ Status do Projeto

- Arquitetura definida
- Design system definido
- Pronto para integração com backend
- Pronto para Electron
- Escalável para produção
