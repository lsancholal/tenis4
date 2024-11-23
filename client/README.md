Plataforma de E-commerce (LOJA DE TÊNIS) Completa

Este repositório contém o código para uma plataforma de e-commerce completa, desenvolvida com React.js para o frontend e Node.js com Express para o backend. A aplicação simula uma loja virtual real, com funcionalidades de cadastro e autenticação de usuários, exibição de produtos (tênis), gerenciamento de carrinho, checkout, além de um painel de administração para gerenciamento de pedidos e estoque.


---

Índice

Descrição do Projeto

Funcionalidades

Requisitos Técnicos

Instalação e Configuração

Execução Local

Tecnologias Usadas

Licença



---

Descrição do Projeto

Este projeto visa criar uma plataforma de e-commerce funcional que permita a compra de tênis de forma intuitiva e segura. A solução é dividida em frontend e backend, com um painel de administração para controle de estoque e pedidos.


---

Funcionalidades

Para o Usuário

Cadastro e Login: Usuários podem se cadastrar, fazer login e realizar o logout.

Catálogo de Produtos: Página para visualização de tênis com filtros de pesquisa (por modelo, marca, preço, etc.).

Carrinho de Compras: Funcionalidade para adicionar e remover itens do carrinho.

Checkout: Página para revisar os itens do carrinho, calcular o valor total e finalizar a compra.

Histórico de Pedidos: Usuários podem visualizar o status dos pedidos realizados.


Para o Administrador

Dashboard: Interface para visualizar e gerenciar os pedidos.

Gerenciamento de Produtos: Administradores podem adicionar, editar e remover tênis disponíveis na loja.

Status de Pedidos: Alterar o status de cada pedido, como "Aguardando Pagamento", "Enviado" ou "Entregue".



---

Requisitos Técnicos

Frontend

React.js: Framework para criação de interfaces dinâmicas e responsivas.

Vite: Ferramenta para otimizar o tempo de desenvolvimento e build do frontend.

React Router: Para navegação entre as páginas.

Material UI ou TailwindCSS: Biblioteca de componentes para uma interface responsiva e atraente.


Backend

Node.js: Ambiente para execução do código JavaScript no backend.

Express: Framework para construção da API RESTful.

JWT (JSON Web Token): Para autenticação e controle de sessões de usuário.

bcrypt: Para criptografia de senhas de usuários.

SQLite: Banco de dados relacional para armazenamento dos dados.

Sequelize: ORM (Object-Relational Mapping) para manipulação de dados no SQLite.


Segurança

CORS: Protege a API de acessos não autorizados.

dotenv: Para gerenciar variáveis de ambiente de forma segura.



---

Instalação e Configuração

1. Clonar o Repositório

Baixe o arquivo

2. Instalar as Dependências

Frontend
Navegue até a pasta do frontend:

cd frontend

Instale as dependências:

npm install

Backend
Navegue até a pasta do backend:

cd backend

Instale as dependências:

npm install


3. Configurar Variáveis de Ambiente
Crie um arquivo .env na raiz do projeto e configure as variáveis necessárias:

JWT_SECRET: Chave secreta para autenticação JWT.

DB_URL: Caminho para o arquivo do banco de dados SQLite (exemplo: ./db/database.sqlite).


Exemplo de arquivo .env:

JWT_SECRET=sua-chave-secreta  
DB_URL=./db/database.sqlite


4. Inicializar o Banco de Dados
No backend, é necessário configurar o banco de dados antes de rodar a aplicação. Utilize o Sequelize para rodar as migrações:

npx sequelize-cli db:migrate




---

Execução Local

1. Rodar o Backend
Navegue até a pasta backend e execute:

npm run dev

Isso iniciará o servidor backend na porta 5000 (por padrão).


2. Rodar o Frontend
Navegue até a pasta frontend e execute:

npm run dev

Isso iniciará o servidor frontend na porta 3000 (por padrão).




---

Tecnologias Usadas

Frontend: React.js, Vite, React Router, Material UI / TailwindCSS

Backend: Node.js, Express, JWT, bcrypt

Banco de Dados: SQLite, Sequelize

Segurança: CORS, dotenv



---

Licença

Este projeto está licenciado sob a MIT License. Você pode utilizá-lo e adaptá-lo para seus próprios projetos, desde que respeite os termos da licença.


---

Contribuindo

Se você deseja contribuir para o desenvolvimento desta plataforma de e-commerce, fique à vontade para enviar pull requests ou abrir issues com sugestões de melhorias ou correções.