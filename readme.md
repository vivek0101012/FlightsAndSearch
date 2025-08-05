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


once done with db configs got src folder from your terminal and 
 after that execute 

```
npx sequelize db:create


```

and then execute 

```
npx sequelize db:migrate 

```


db design 

Here's a clean, **README-friendly** version of your database schema description. It's formatted for clarity and collaboration across engineering teams:

---

## ✈️ Flights & Search – Database Schema

This schema supports a flight booking system with core entities: **Airplanes**, **Flights**, **Airports**, and **Cities**.

---

### **Tables & Fields**

#### **1. Airplane Table**

Stores airplane information.

| Field          | Type         | Description                    |
| -------------- | ------------ | ------------------------------ |
| `id`           | Integer (PK) | Unique airplane ID             |
| `model_number` | String       | Airplane model number          |
| `capacity`     | Integer      | Number of passengers supported |
| `created_at`   | Timestamp    | Auto-managed                   |
| `updated_at`   | Timestamp    | Auto-managed                   |

---

#### **2. Flight Table**

Stores details of individual flights.

| Field                 | Type             | Description                          |
| --------------------- | ---------------- | ------------------------------------ |
| `id`                  | Integer (PK)     | Unique flight ID                     |
| `flight_number`       | String           | Unique flight identifier             |
| `airplane_id`         | FK → Airplane.id | The airplane assigned to this flight |
| `departure_date_time` | Timestamp        | Scheduled departure time             |
| `arrival_date_time`   | Timestamp        | Scheduled arrival time               |
| `src_airport_id`      | FK → Airport.id  | Source airport                       |
| `des_airport_id`      | FK → Airport.id  | Destination airport                  |
| `src_city_id`         | FK → City.id     | Source city (denormalized for speed) |
| `des_city_id`         | FK → City.id     | Destination city                     |
| `created_at`          | Timestamp        | Auto-managed                         |
| `updated_at`          | Timestamp        | Auto-managed                         |

---

#### **3. Airport Table**

Stores information about airports.

| Field        | Type         | Description                       |
| ------------ | ------------ | --------------------------------- |
| `id`         | Integer (PK) | Unique airport ID                 |
| `name`       | String       | Name of the airport               |
| `city_id`    | FK → City.id | City where the airport is located |
| `address`    | String       | Airport address                   |
| `created_at` | Timestamp    | Auto-managed                      |
| `updated_at` | Timestamp    | Auto-managed                      |

---

#### **4. City Table**

Stores city data.

| Field        | Type         | Description      |
| ------------ | ------------ | ---------------- |
| `id`         | Integer (PK) | Unique city ID   |
| `name`       | String       | Name of the city |
| `created_at` | Timestamp    | Auto-managed     |
| `updated_at` | Timestamp    | Auto-managed     |

---

### **Entity Relationships**

* **Airplane ↔ Flights**:
  One airplane can operate multiple flights
  → `1 : N`

* **Airport ↔ Flights**:
  One airport can be the origin or destination of many flights
  → `1 : N`

* **City ↔ Airports**:
  A city can have multiple airports
  → `1 : N`

* **Flight ↔ City**:
  Flights store city IDs for faster access (denormalized)
  → referenced by `src_city_id`, `des_city_id`

---

Let me know if you'd like this turned into markdown or want Sequelize model templates for it.
