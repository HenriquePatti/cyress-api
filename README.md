# Cypress API Tests

## 📌 Sobre o projeto

Este repositório contém exemplos de testes automatizados de API utilizando o Cypress.

O projeto foi desenvolvido como parte da **Mentoria 2.0 do Julio de Lima**, com participação especial de **Samuel Lucas**

---

## 🎯 Objetivo

- Demonstrar testes de API com Cypress
- Validar respostas HTTP (status, body )
- Servir como base de estudo e evolução para automação backend
- Aplicar conceitos de QA voltados para APIs REST
- Compartilhar conteúdo apresentado com os membros da mentoria.

---

## 🧪 Tecnologias utilizadas

- Node.js
- Cypress
- JavaScript

---

## 🚀 Como executar o projeto

### Instalar dependências

```bash
npm install
```

### Executar testes no modo interativo

```bash
npx cypress open
```

### Executar testes via terminal

```bash
npx cypress run
```

---

## 📂 Estrutura do projeto

```
cypress-api/
│
├── cypress/
│   ├── e2e/ (ou integration/)
│   │   └── workshop-api.cy.js
│   │
│   ├── fixtures/
│   │   └── example.json
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   └── plugins/ (se aplicável)
│
├── cypress.config.js
├── package.json
└── README.md
```

---

## 📌 Descrição das pastas

- **e2e / integration**
  - Contém os testes automatizados de API

- **fixtures**
  - Dados estáticos para testes (mock, payloads)

- **support**
  - Configurações globais e comandos customizados

- **plugins**
  - Extensões do Cypress (quando utilizado)

---

## 📊 Exemplos de testes implementados

- Validação de status code
- Validação de estrutura da resposta
- Validação de campos específicos
- Testes de cenários positivos

---

## ⚠️ Observações

Este projeto tem caráter educacional e pode evoluir para:

- Estrutura de framework de testes
- Integração com CI/CD
- Validação de contrato (schema validation)
- Testes negativos e de segurança

---

## 👨‍💻 Autor

Henrique Patti

---

## 📚 Referência

Mentoria 2.0 - Julio de Lima  
Participação especial: Samuel Lucas
