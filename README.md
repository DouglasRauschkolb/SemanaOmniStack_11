# SemanaOmniStack_11

## A APLICAÇÃO



## PRIMEIRO DIA

Instalação NODE

    -Ubuntu:
        Abrir o terminal e executar os seguintes comandos;
            curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
            sudo apt-get install -y nodejs

Iniciando o projeto:

    Criar pastas para o projeto

    -Backend:
        Executar no terminal o seguinte comando:
            npm install express

        Rodar a aplicação:
            node index.js
            
    -Frontend:
        React:
        Executar no terminal o seguinte comando:
            npx create-react-app frontend
            
## SEGUNDO DIA

Instalação Insomnia


Nodemon
    npm install nodemon -D  

    Modificar script em 'package.json'
        "scripts": {
            "start": "nodemon index.js"
        }

    Iciciar no terminal
        npm start

KNEX.JS

    Instalação no projeto:
        
        Executar os seguintes comandos no terminal, estando no diretório do projeto.
            npm install knex
    
            npm install sqlite3
            Comando pode variar pelo sistema de banco de dados que será utilizado.
            

    Criar tabela:
        
        npx knex migrate:make create_nomeTabela

        Executar migration:
            npx knex migrate:latest



Aplicação:

    Entidades:
    
        - ONG
        - Casos (incident)

    Funcionalidades:
    
        - Login de ONG
        - Logout de ONG
        - Cadastro de ONG
        - Cadastrar novos casos
        - Deletar casos
        - Listar casos especificos de uma ONG
        - Listar todos os casos
        - Entrar em contato com a ONG

## TERCEIRO DIA
## QUARTO DIA
## QUINTO DIA
