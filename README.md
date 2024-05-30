# Projeto BootPlay - Ecommerce de Discos de Vinil - Frontend
### Tecnologias
- Vite
- Typescript
- React
- TailwindCSS
- Axios
- Shadcn
- Radix-UI

######  Features e Telas
- Login; 
- Pesquisa de album; 
- Adicionando créditos à carteira; 
- Comprando album; 
- Album direcionando ao Spotify;
- Tela de perfil
- Tela da carteira
- Verificação de saldo antes de comprar album
- Tela de 404 - not found

### Repositório do Backend
- https://github.com/realmoreirabruno/vinyl-ecommerce-backend

### Como executar a aplicação

##### Front-End:
- ```git clone https://github.com/realmoreirabruno/vinyl-ecommerce-frontend``` Para clonar o repositório na sua IDE
- ```sudo docker compose up -d ``` Para executar a imagem docker no frontend e ser possivel utilizar a aplicação (No Linux)
- ```npm install ``` Para instalar as dependências necessárias
- ```npm run dev ``` Para executar o Front-End

##### Back-End:
É necessário ter o Docker instalado para executar a aplicação localmente.
- ```git clone https://github.com/realmoreirabruno/vinyl-ecommerce-backend ``` Para clonar o repositório na sua IDE
- ```docker-compose -f docker-compose.yml build ``` Para fazer o download das imagens necessárias
- ```docker-compose -f docker-compose.yml up``` Para criar os containers
- Realizados estes comandos, basta  executar o backend na sua IDE. Bm@050301