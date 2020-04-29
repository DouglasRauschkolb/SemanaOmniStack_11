# SemanaOmniStack_11

## A APLICAÇÃO
    O projeto desenvolvido na Semana Omnistack 11 da Rocketseat, consiste em um aplicativo 
    que busca ligar as pessoas que desejam ajudar ONGs, através do cadastro de casos.
    
## TECNOLOGIAS
    NODE.JS
    REACT
    REACT NATIVE
    EXPO
    
## EXECUTAR O PROJETO
    Faça o download do projeto o clone com o 'git clone'.
    
    Tanto para o backend, frontend e mobile execute os seguintes comandos.
    
        Instalação das depêndencias:
            npm install
            
        Iniciar a aplicação:
            npm start
    

## ALGUMAS INSTRUÇÕES UTILIZADAS DURANTE A CONSTRUÇÃO DO PROJETO
## PRIMEIRO DIA

Instalação NODE

    -Linux:
    
        Abrir o terminal e executar os seguintes comandos:
        
            curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
            sudo apt-get install -y nodejs

# Iniciando o projeto:

    -Backend:
        Executar no terminal o seguinte comando para utilização do express framework:
            npm install express

        Rodar a aplicação:
            node index.js
            
    -Frontend:
        React:
            Executar no terminal o seguinte comando para a criação do projeto com react:
                npx create-react-app frontend
            
## SEGUNDO DIA

Nodemon
    Utilizado para fazer o reload automático do projeto.
    
    Instalaçao:
        npm install nodemon -D  

        Modificar script em 'package.json'
            "scripts": {
                "start": "nodemon index.js"
            }

    Iniciar no terminal
        npm start

KNEX.JS
    Utilizado para a criação e manutenção do banco de dados usado pelo projeto.
    
    Instalação no projeto:
        
        Executar os seguintes comandos no terminal, estando no diretório do projeto.
            npm install knex
    
            npm install sqlite3
            Comando pode variar pelo sistema de banco de dados que será utilizado.
            
    Criar tabela:
        
        npx knex migrate:make create_nomeTabela

        Executar migration:
            npx knex migrate:latest

Aplicação do projeto BE THE HERO:

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

    Construção do Front End
    
    Comunicar com o Back End(API):
    
        npm install axios

## QUARTO DIA

    Instalando o EXPO:
        npm install -g expo-cli

    Iniciar projeto Mobile:
        expo init mobile

    Rodar a aplicação:
        npm start

    Usando o pacote de navegação:
        npm install @react-navigation/native

        expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view

        npm install @react-navigation/stack

        expo install expo-constants

    E-mail

        expo install expo-mail-composer

    Conectar com API

        npm install axios

        npm install intl

## QUINTO DIA

    Biblioteca para validações:
        
    Back End:

        npm install celebrate

    Cofigunrando testes:

        npm install jest -D

        npx jest --init

    Executar testes criados:
     
        npm test
    
    Configurando banco de dados para teste:

        npm install cross-env

        npm install supertest -D
