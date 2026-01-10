📘 REGRA OFICIAL DE DESENVOLVIMENTO

Projeto: Dresbach Hosting
Status: ATIVA
Validade: Indeterminada (até nova ordem explícita)

1️⃣ PRINCÍPIO MÁXIMO (REGRA MÃE)

Nada deve ser criado, alterado, removido ou ajustado sem solicitação explícita.

Se não foi pedido:

❌ Não faz

❌ Não ajusta

❌ Não melhora

❌ Não “aproveita”

2️⃣ ESCOPO É LEI (SEM INTERPRETAÇÃO)
✔ Permitido

Executar exatamente o que foi solicitado

Somente no local solicitado

Somente com o objetivo solicitado

❌ Proibido

Fazer algo “a mais”

Antecipar funcionalidades

Ajustar visual, layout ou UX

Refatorar código que não foi pedido

“Já deixar pronto pra depois”

📌 Escopo não se interpreta. Escopo se cumpre.

3️⃣ REGRA DE NÃO-INTERFERÊNCIA VISUAL
❌ É TERMINANTEMENTE PROIBIDO:

Centralizar ou mover cards

Alterar grid / flex / spacing

Alterar cores, fontes ou tamanhos

Ajustar responsividade

Alterar CSS, Tailwind, classes ou estilos inline

Reorganizar componentes visuais

📛 Mesmo que:

“Fique melhor”

“Estava feio”

“Estava errado”

“Era fácil de arrumar”

👉 Layout só muda com ordem explícita.

4️⃣ REGRA DE DESFAZER IMEDIATO

Se qualquer coisa fora do pedido foi alterada:

🔁 DESFAZER IMEDIATAMENTE

🔁 Retornar ao estado original

🔁 Sem debate

🔁 Sem justificativa

Melhor errado como estava
do que “melhorado” sem autorização.

5️⃣ REGRA DE COMPONENTIZAÇÃO OBRIGATÓRIA
📦 Tudo é componente

OBRIGATÓRIO usar componentes para:

Botões

Inputs

Cards

Modais

Tabelas

Formulários

Listas

Qualquer UI reutilizável

❌ Proibido:

HTML duplicado

JSX repetido

Botões inline

Lógica misturada com UI

📌 Componentes são a única fonte da verdade.

6️⃣ REGRA DE ISOLAMENTO DE RESPONSABILIDADE
Camada	Responsabilidade
app/	Rotas e páginas
components/	UI pura
lib/	Integrações externas
hooks/	Lógica de estado
api/	Backend / regras
styles/	Estilos globais

❌ Misturar camadas = erro grave

7️⃣ REGRA DE NÃO-CRIAÇÃO ANTECIPADA

É proibido:

Criar arquivos “para o futuro”

Criar funções não usadas

Criar pastas vazias sem pedido

Criar endpoints não consumidos

📌 Código só nasce quando é necessário.

8️⃣ REGRA DE NOMENCLATURA E ORGANIZAÇÃO

Pastas → kebab-case

Componentes → PascalCase.tsx

Hooks → useNome.ts

Funções → verbos claros (get, create, update)

Nada genérico (utils, helpers sem contexto)

9️⃣ REGRA DE SEGURANÇA

Nada sensível no frontend

Nada hardcoded

.env sempre isolado

Tokens só no backend

Cookies com httpOnly

🔟 REGRA DE COMUNICAÇÃO

Antes de qualquer ação, o dev deve perguntar:

“Isso foi pedido explicitamente?”

Se a resposta não for SIM, NÃO FAZER.

🛑 FRASES PROIBIDAS

“Aproveitei e…”

“Já deixei pronto…”

“Melhorei um pouco…”

“Ajustei só o layout…”

“Centralizei porque…”

📛 Qualquer uma dessas = violação de regra.

🏁 REGRA FINAL (INQUEBRÁVEL)

Desenvolver é executar ordens,
não interpretar intenções.