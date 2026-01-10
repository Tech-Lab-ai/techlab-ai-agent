# Guia de Contribuição – Dresbach Hosting

Este documento define as **regras obrigatórias** para qualquer pessoa que
desenvolva, altere ou mantenha este projeto.

O descumprimento destas regras **não será aceito**.

---

## 🎯 Princípio Fundamental

> ❗ **Faça apenas o que foi explicitamente solicitado.**

- Não melhorar layout
- Não refatorar código antigo
- Não centralizar cards
- Não renomear pastas
- Não otimizar código sem pedido
- Não "aproveitar para ajustar"

Se não foi pedido → **NÃO FAÇA**.

---

## 🧱 Arquitetura do Projeto

- Projeto modular
- Separação clara entre:
  - Site institucional
  - Área do Cliente
  - Painel Administrativo
- Cada área possui seus próprios componentes

❌ Componentes de cliente **não** devem ser usados no admin sem autorização  
❌ Componentes do admin **não** devem ser expostos ao cliente  

---

## 📦 Regras de Componentização (OBRIGATÓRIO)

- Todo botão é um componente
- Todo formulário é um componente
- Todo card é um componente
- Nenhum JSX duplicado
- Nenhum HTML inline para ações

```tsx
// ✅ Correto
<Button variant="primary" />

// ❌ Incorreto
<button className="...">Salvar</button>
🧩 Importação de Componentes

Componentes devem ser importados

Nunca recriar código existente

Componentes ficam em:

/components/site

/components/area-do-cliente

/components/administracao

📁 Organização de Pastas

Não criar pastas fora do padrão

Não mover arquivos existentes

Não renomear diretórios

Qualquer nova pasta deve ter README

🎨 Layout & UI

Layout NÃO deve ser alterado sem pedido

CSS só muda se solicitado

Não ajustar espaçamentos

Não trocar cores, fontes ou alinhamentos

⚙️ Funcionalidades

Criar somente a função solicitada

Não adicionar funcionalidades extras

Não "prever o futuro"

Não adicionar lógica opcional

🔐 Segurança

Nunca expor chaves, tokens ou secrets

Variáveis sensíveis apenas em .env

Nenhuma validação crítica no frontend

Backend é responsável pela segurança

🧪 Testes

Criar testes somente se solicitado

Não remover testes existentes

Não alterar comportamento atual

🧹 Código Limpo (sem exageros)

Código legível

Sem overengineering

Sem abstrações desnecessárias

Clareza > sofisticação

🧾 Commits
Padrão de Commit
tipo: descrição curta e objetiva

Exemplos
feat: criar botão de pagamento no checkout
fix: corrigir validação do formulário de login
chore: ajustar import incorreto


❌ Commits genéricos:

"ajustes"

"melhoria"

"update"

"refactor"

##🚫 Proibições Absolutas

-Alterar código não relacionado à task

-Alterar layout sem pedido

-Refatorar por conta própria

-Centralizar cards

-Ajustar responsividade sem solicitação

-Apagar código "porque achou melhor"

##✅ Checklist Antes do Commit

- Fiz somente o que foi pedido

- Não mexi em layout

- Usei componentes

 -Não criei funcionalidades extras

 -Código está claro e objetivo

 -Não quebrei nada existente

##📌 Regra Final

-Se houver dúvida → PARE e pergunte
-Se não foi pedido → NÃO FAÇA
# Checklist de Pull Request – Dresbach Hosting

Antes de abrir um PR, verifique:

---

## ✅ Checklist Obrigatório

- [ ] Fiz somente o que foi pedido
- [ ] Não alterei layout
- [ ] Não refatorei código existente
- [ ] Usei componentes reutilizáveis
- [ ] Não criei funcionalidades extras
- [ ] Não mexi em arquivos fora do escopo
- [ ] Código está legível e simples

---

## 🚫 Motivos de Rejeição Automática

- Mudança visual sem pedido
- Refatoração não solicitada
- Ajustes “aproveitando a task”
- Alteração de estrutura de pastas
- Centralização de cards
- Otimizações não solicitadas

---

## 📌 Regra Final

> PRs que não seguirem estas regras serão **fechados sem revisão**.
