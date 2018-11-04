--### Challenge #1: Customer View (Minimum Requirement)

--1. Create a MySQL Database called `bamazon`.

DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- 2. Then create a Table inside of that database called `products`.
CREATE TABLE products (

-- 3. The products table should have each of the following columns:

   -- * item_id (unique id for each product)
    id INTEGER not null auto_increment,

   -- * product_name (Name of product)
   name VARCHAR(50) NOT NULL,

   -- * department_name
   department_name VARCHAR(50) NOT NULL,

   -- * price (cost to customer)
    price INTEGER (10),

   -- * stock_quantity (how much of the product is available in stores)

   stock_quantity INTEGER (10)

   PRIMARY KEY (ID),
);



