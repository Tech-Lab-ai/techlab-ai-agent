🧾 Integração de Notas Fiscais – Sistema MyWay (2026)
1️⃣ Objetivo

Documentar o processo de emissão de Notas Fiscais (NF-e / NFS-e) para vendas realizadas pelo sistema de revenda, conforme as novas regras fiscais de 2026.

2️⃣ Escopo

Todas as vendas realizadas por revendedores com CNPJ válido.

Emissão automática de NF-e ou NFS-e para clientes finais.

Controle de repasses e comissão da empresa.

Integração com Webservices de Receita Federal e prefeituras (para NFS-e).

Logs completos de emissão para auditoria.

3️⃣ Regras Fiscais 2026

Obrigatório CPF ou CNPJ válido do comprador.

NF-e deve conter:

Natureza da operação (venda, serviço, revenda)

CFOP correto (Código Fiscal de Operações e Prestações)

Base de cálculo e alíquota de impostos

Valores líquidos e descontos aplicados

Código do produto/serviço

NFS-e (serviços):

Código do serviço conforme tabela do município

Retenção de ISS, se aplicável

Dados do prestador e tomador do serviço

Assinatura digital obrigatória na nota.

Envio automático para a SEFAZ / prefeitura assim que a venda é concluída.

4️⃣ Fluxo de Integração no Sistema
flowchart TD
    A[Cliente faz pedido] --> B[Pagamento confirmado (Stripe / Pix)]
    B --> C[Sistema calcula comissão da empresa]
    C --> D[Subconta aprovisionada / Produto entregue]
    D --> E[Sistema gera NF-e / NFS-e]
    E --> F[Validação e assinatura digital]
    F --> G[Envio automático para SEFAZ / Prefeitura]
    G --> H[Registro no banco de dados e logs de auditoria]

5️⃣ Endpoints e Rotinas
Função	Endpoint / Serviço	Descrição
Gerar NF	/api/nf/generate	Recebe dados da venda, calcula impostos, retorna NF pronta.
Assinar NF	/api/nf/sign	Assina digitalmente a nota com certificado A1/A3.
Enviar NF	/api/nf/send	Envia nota para SEFAZ ou NFS-e da prefeitura.
Consultar NF	/api/nf/status	Retorna status da nota (aprovada, rejeitada, cancelada).
Cancelar NF	/api/nf/cancel	Solicita cancelamento conforme prazo legal.
Reemitir NF	/api/nf/reissue	Reemite nota com correção de dados, se permitido.
6️⃣ Logs e Auditoria

Cada nota emitida deve gerar um registro imutável no banco.

Armazenar:

ID da venda

CNPJ/CPF do cliente

Valor da nota

Data e hora da emissão

Status de envio (aprovada, rejeitada, pendente)

Histórico deve ser consultável via painel administrativo.

7️⃣ Certificação Digital

Certificados válidos: A1 (software) ou A3 (hardware).

Renovação anual obrigatória.

Deve ser armazenado seguro e utilizado apenas no backend para assinar notas.

8️⃣ Observações Importantes

Todas as vendas realizadas no modelo de revenda devem gerar NF para o revendedor e, quando aplicável, para o cliente final.

A integração deve respeitar regras de multi-empresa (white-label).

Preparar para possíveis alterações da SEFAZ / municípios em 2026.