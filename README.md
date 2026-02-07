# Tech Lab AI Agent

Agente de IA da **Tech Lab (Testelab)** desenvolvido em **Node.js**, responsável por realizar atendimento consultivo completo e guiado, do primeiro contato até a transição para atendimento humano, com foco em **conversão, segurança jurídica e LGPD**.

Este projeto não é um chatbot genérico.  
É um **agente de atendimento corporativo**, baseado em fluxo fechado e máquina de estados.

---

## 🚀 Funcionalidades

- Atendimento automatizado via WhatsApp
- Saudação profissional e menu inicial
- Fluxo guiado com opções e subopções
- Formulário conversacional passo a passo
- Diagnóstico automático de projeto
- Venda consultiva automatizada
- Pagamento via link externo (Asaas)
- Solicitação e registro de comprovante
- Geração e aceite de contrato digital
- Transição para atendimento humano após pagamento
- Coleta de feedback
- Exclusão automática de dados (LGPD)
- Proteção contra desvio de conversa e jailbreak

---

## 🧭 Arquitetura

- **Node.js**
- Máquina de estados (state machine)
- WhatsApp Web (QR Code)
- Banco de dados (SQLite / PostgreSQL)
- Camadas de compliance e retenção de dados

---

## 🔐 LGPD & Compliance

- Consentimento explícito antes da coleta de dados
- Coleta mínima de informações
- Exclusão automática em caso de não contratação
- Retenção apenas conforme contrato
- Logs sem dados sensíveis

---

## 💳 Pagamentos

- Pagamento via **link externo seguro**
- Nenhuma integração bancária direta
- Comprovante enviado pelo cliente via WhatsApp
- Validação interna manual

---

## 👨‍💼 Atendimento Humano

- Atendimento inicial é guiado por IA
- Após pagamento, o atendimento passa a ser **100% humano**
- Todo projeto possui contrato formal

---

## ⚠️ Regras Importantes

- O agente não conversa fora do fluxo
- Não responde perguntas sobre IA ou funcionamento interno
- Não aceita trabalhar sem detalhamento técnico
- Não promete entregas sem pagamento confirmado
- Não valida pagamentos automaticamente

---

## 📂 Estrutura Base

/bot
/forms
/compliance
/contracts
/payments
/security
/data


---

## 📌 Status do Projeto

Em desenvolvimento ativo.  
Fluxo fechado e pronto para implementação direta.

---

## 📄 Licença

Veja o arquivo LICENSE para mais detalhes.
