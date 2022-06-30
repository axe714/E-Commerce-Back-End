# E-Commerce-Back-End 📋

![MIT](https://img.shields.io/badge/License-MIT-blue.svg)

[![E-commerce Back End -PENDING-](#picturelink)](#)

## Description 📍
- An application that replicates the backend of an e-commerce website which utilizes node, express and sequelize to interact with a MySQL database.

## Table Of Contents 📜
* [Installation](#installation)
* [Youtube](#youtube)
* [Usage](#usage)
* [License](#license)
* [Contribution Guidelines](#contribution-guidelines)
* [Github Repository](#github-repository)
* [Contact](#contact-information)
    * [Github](#github)
    * [Email](#email)

## Installation 
 1. Run ``` npm i ``` in the terminal to install the required dependencies
 2. Edit the ```.env file``` and input the required MySql credentials
 3. Run ```schema.sql``` inside the MySQL shell or MySQL Workbench
 5. Run ```npm run seed``` to seed and populate the database
 4. Run ```node index.js``` in the terminal to sync sequelize and start the server 

## Youtube 
- [E-commerce Back End Video -PENDING-](#)

## Usage  

- The database consists of 4 tables created using 4 corresponding sequelize models:
```
1. Category Model + Table (parent table)
    - id (primary key)
    - category_name

2. Product Model + Table
    - id (primary key)
    - product_name
    - price 
    - stock 
    - category_id (foreign key, references category.id)

3. Product Tag Model + Table
    - id (primary_key)
    - product_id (foreign key, references product.id)
    - tag_id (foreign key, references tag.id)

4. Tag Model + Table
    - id (primary key)
    - tag_name
```

- Functionalities of the application include the ability to send a GET, POST, PUT, or DELETE route on the following end points: 

```
1. Categories end point: 
    /api/categories

2. Products end point:
    /api/products

3. Tags end point: 
    /api/tags
```

## License 
- This project uses the following license:<br>
     - ***MIT***

## Contribution Guidelines 
- All contributors are welcome! Please don't hesitate to contact me below to contribute to this project.

## Github Repository 
- [E-commerce Back End](https://github.com/axe714/E-Commerce-Back-End)

## Contact Information 
- [Github Profile - Axe714](www.github.com/axe714)

### Email:
- For inquiries/questions, please reach out to me at axe@github.com
