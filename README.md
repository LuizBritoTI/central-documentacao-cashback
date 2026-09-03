# Central de Documentação do Fluxo de Cashback — LJB CRM Mais Bônus 2026

![Status](https://img.shields.io/badge/Status-100%25%20Homologado-success?style=for-the-badge)
![Versão](https://img.shields.io/badge/Versão-2.5.0-blue?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/Database-PostgreSQL%2017-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Design System](https://img.shields.io/badge/Design%20System-Vector%20SVG%20Dual%20Theme-0284c7?style=for-the-badge)

Central definitiva de governança, regras de negócio, engenharia de dados e apoio rápido ao fluxo de cashback e fidelidade do **Lojão do Brás (CRM Mais Bônus 2026)**.

---

## 🎯 Propósito e Alinhamento Executivo

Idealizado pela diretoria do Lojão do Brás (Adriana Bezerra Bessa e Bruno Felix Bessa), o sistema substitui modelos promocionais descentralizados por um **motor determinístico de fidelidade, cashback e cupons**, integrado em tempo real às 77 filiais da rede.

Antes do fechamento de cada venda no PDV, o motor avalia as campanhas vigentes, aplicando tetos sanitários, pisos garantidos, orçamentos atômicos e a **Regra de Ouro da Concorrência** (campanhas nunca se somam, vencendo a de maior retorno financeiro em Reais).

---

## 🚀 Funcionalidades da Central

- **Dual Theme Corporativo Acessível**: Inicialização em modo claro (Light Theme) com alternância fluida para modo escuro (Dark Theme), contraste WCAG AAA e zero quebras visuais.
- **Ícones 100% Vetoriais (SVG)**: Substituição integral de emojis nativos por vetores SVG nítidos e padronizados.
- **Simulador Interativo (Playground 2.0)**:
  - Seletores ao vivo de valor da compra, abatimento de bônus, meio de pagamento, tipo de cliente e categorias.
  - Gráfico dinâmico de barras com concorrência entre regras em tempo real (destaque para vencedora e perdedoras).
  - Emulador de Comprovante Térmico de PDV com cálculo exato do crédito gerado.
  - Exibição de Trace JSON detalhado com justificativa do motor.
- **Filtro de Visualização por Perfil**: Alternância instantânea entre *Todos os Tópicos*, *Visão Executiva* e *Visão Técnica*.
- **Diagramas de Arquitetura & Fluxo de Estados**: Representação visual do ciclo de vida das campanhas (Rascunho &rarr; Pendente &rarr; Ativa &rarr; Encerrada).
- **Modelo de Dados & Dicionário de Tabelas**: Esquema relacional com chaves PK/FK e tipos de colunas do PostgreSQL 17 / Supabase.
- **Tabela Sequencial de Endpoints do Checkout (Passos 0 a 6)**: Mapeamento de autenticação mTLS, JWT, simulação, resgate, fechamento e contingência offline.
- **Exemplos de Payloads Reais (Contrato v2 - LLB-157)**: Abas interativas com código em JSON, cURL e C# (.NET) com botão de cópia instantânea.
- **Consultas SQL Prontas para Auditoria**: Queries homologadas para rastreamento de memórias de cálculo, conciliação FIFO de saldos e controle de orçamentos.
- **Pronto para Impressão e PDF**: Estilos de mídia `@media print` otimizados para exportação direta em relatórios físicos ou digitais.

---

## 💻 Estrutura de Arquivos

```text
central-documentacao-cashback/
├── index.html       # Estrutura semântica completa com 15 seções e componentes
├── styles.css       # Design System executivo, dual theme (:root e [data-theme="dark"]), SVGs e layout responsivo
├── app.js           # Motor de cálculo do simulador, alternador de temas, abas de código, busca e acordeons
├── server.js        # Servidor HTTP nativo Node.js leve para execução local
├── package.json     # Metadados e scripts de execução
├── .gitignore       # Padrão de exclusão de artefatos temporários
└── README.md        # Documentação executiva do repositório
```

---

## 🛠️ Como Executar Localmente

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 14 ou superior) instalado.

### Passos

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/LuizBritoTI/central-documentacao-cashback.git
   cd central-documentacao-cashback
   ```

2. **Inicie o servidor:**
   ```bash
   npm start
   ```
   *Ou diretamente:*
   ```bash
   node server.js
   ```

3. **Acesse no navegador:**
   ```text
   http://localhost:3333
   ```

---

## 🔒 Governança e Segurança

- **Idempotência**: Requisições de checkout utilizam chave única baseada em `saleId` para evitar duplicidade em oscilações de rede.
- **LGPD & Proteção de Dados**: Dados sensíveis (CPF, telefone) trafegam criptografados em AES-GCM 256 bits e são mascarados no PDV.
- **Biometria Facial (Fortface)**: Validação efêmera criptografada via mTLS sem retenção desnecessária de fotos em bancos locais.

---

## 👤 Autoria & Manutenção

- **Desenvolvido por**: Luiz Brito ([@LuizBritoTI](https://github.com/LuizBritoTI))
- **Organização**: Lojão do Brás / Grupo VAB
- **Ano**: 2026
