# DevUtils

## 1. Descrição Geral

O **DevUtils** é um site de utilidades criado para desenvolvedores, focado em fornecer ferramentas práticas que facilitam a criação de dados de teste e a manipulação de strings. O objetivo principal é agilizar o desenvolvimento, oferecendo uma plataforma para gerar rapidamente dados válidos (como CPF, RG, nomes) e realizar diversas operações com strings, como conversão e formatação.

### 1.1 Objetivo
O projeto tem como finalidade fornecer uma série de ferramentas que auxiliam os desenvolvedores em tarefas recorrentes e cotidianas, como:
- Gerar dados de teste válidos (nome, CPF, RG, etc.).
- Manipuladores e conversores de strings.
- Outras utilidades que facilitam o desenvolvimento de sistemas.

### 1.2 Tecnologias Utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias e frameworks:
- **React**: Biblioteca JavaScript para construção da interface do usuário.
- **TypeScript**: Superconjunto de JavaScript que adiciona tipagem estática ao código.
- **HTML**: Linguagem de marcação para estruturar o conteúdo da aplicação.
- **SCSS**: Uma extensão de CSS que oferece recursos adicionais como variáveis e mixins, facilitando o design responsivo.
- **Vite**: Ferramenta de build rápida para projetos React, utilizada para desenvolvimento e empacotamento.
- **Jest**: Framework de testes unitários para garantir a funcionalidade e a qualidade do código.
- **ShadCN**: Design system e biblioteca de componentes para React que segue os princípios de acessibilidade e usabilidade.
- **Faker**: Biblioteca para gerar dados falsos (mas realistas) para testes e desenvolvimento.
- **Firebase Firestore**: Firebase Firestore é um banco de dados de documentos NoSQL que permite aos usuários armazenar, sincronizar e consultar dados para seus aplicativos.

### 1.3 Inspirações
Este projeto foi inspirado em sites que fornecem ferramentas semelhantes:
- [Text Mateus F](https://text.mateusf.com)
- [4Devs](https://www.4devs.com.br)
- [RandomUser](https://randomuser.me/)
- [PublicAPIs](https://publicapis.dev/)

## 2. Funcionalidades Principais

### 2.1 Gerador de Dados
Permite a criação de dados aleatórios e válidos para uso em testes de software, como:
- **Nomes completos**
- **CPF** (Cadastro de Pessoas Físicas)
- **RG** (Registro Geral)

### 2.2 Manipuladores de String
Oferece utilidades para manipulação de strings, como:
- Conversão entre maiúsculas e minúsculas.
- Remoção de acentos.
- Substituição de caracteres específicos.

### 2.3 Conversores de String
Ferramentas para conversão de formatos de string, como:
- Converta strings entre diferentes formatos de case (camelCase, snake_case, etc.).
- Codificação e decodificação de strings (Base64, URL Encoding).

## 3. Estrutura do Projeto

### 3.1 Arquitetura
O projeto segue uma arquitetura baseada em componentes, onde cada funcionalidade é encapsulada em um componente React. As rotas são gerenciadas pelo React Router para permitir navegação entre as diferentes utilidades.

### 3.2 Organização dos Arquivos
A estrutura de pastas do projeto está organizada da seguinte forma:

```plaintext
/devutils
  ├── /node_modules
  ├── /public
  ├── /src
  │   ├── /components    # Componentes reutilizáveis da aplicação
  │   ├── /pages         # Páginas principais que representam cada utilidade
  │   ├── /services      # Lógica de manipulação de dados e APIs
  │   ├── /styles        # Arquivos SCSS para estilização
  │   │   ├── _variables.scss  # Variáveis globais de estilo
  │   │   └── global.scss      # Estilos globais
  │   ├── /tests         # Testes unitários com Jest
  │   ├── /utils         # Funções utilitárias para operações de string e dados
  │   ├── App.tsx        # Componente principal
  │   ├── main.tsx       # Ponto de entrada da aplicação
  │   └── setupTests.ts  # Configurações globais de testes
  ├── jest.config.js     # Configuração do Jest
  ├── tsconfig.json      # Configuração do TypeScript
  ├── package.json       # Dependências e scripts do projeto
  └── vite.config.ts     # Configuração do Vite
```

## 4. Configuração do Ambiente

### 4.1 Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em seu ambiente. Caso não tenha, faça o download das versões mais recentes em [nodejs.org](https://nodejs.org).

### 4.2 Passos para Clonar e Executar o Projeto

Clone o repositório:
```bash
git clone https://github.com/ythiago03/devutils.git
```
Acesse o diretório do projeto:
```bash
cd devutils
```
Instale as dependências:
```bash
npm install
```
Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
Abra o navegador e acesse http://localhost:3000 para visualizar a aplicação.

### 4.3 Scripts Disponíveis
- **npm run dev:** Inicia o servidor de desenvolvimento.
- **npm run build:** Gera a versão otimizada para produção.
- **npm test:** Executa os testes unitários com Jest.

## 5. Testes
O projeto está configurado para testes unitários utilizando o Jest e o Testing Library. Para rodar os testes, utilize o comando:
```bash
npm run test
```

## 6. Estilos
O projeto utiliza SCSS para gerenciar os estilos de maneira modular. No diretório src/styles, você pode encontrar os arquivos de estilo principais:

- **global.scss:** Arquivo para os estilos globais da aplicação.
- **_variables.scss:** Definição de variáveis reutilizáveis (como cores, tamanhos de fonte, etc.).

## 7. Contribuição
Contribuições são bem-vindas! Caso queira colaborar com o projeto, siga estas etapas:

Faça um fork do repositório.
Crie uma branch com sua feature:
```bash
git checkout -b minha-feature
```
Faça o commit das suas alterações:
```bash
git commit -m 'Adiciona nova funcionalidade'
```
Envie para o repositório remoto:
```bash
git push origin minha-feature
```
Abra um Pull Request para revisão.

## 8. Licença
Este projeto está licenciado sob a licença MIT. Para mais detalhes, consulte o arquivo LICENSE.