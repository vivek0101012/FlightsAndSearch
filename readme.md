```
-src/
    index.js // server 
    models/
    config/
    seeders/
    migrations/
    controllers/
    middlerware/
    repositry/
    services/
    utils/
    

-test/ [later]
-static/
-temp/

```

# Welcome to the FlightAndSearch

## Project Setup

clone the project on your local

- execute `npm install` to install all the dependencies  on same path as your roort directory 

- create a `env` file in the root directroy  and add the following env variable 

     - PORT =3000

- For setting up the orm 


``
cd src 

``
and then

``
npm i sequelize mysql2

``

```
npx sequelize-cli init 

```

and then configure the config/config.json

and after that execute 

```
npx sequelize db:create


```