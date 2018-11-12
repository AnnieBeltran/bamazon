--### Challenge #1: Customer View (Minimum Requirement)

--1. Create a MySQL Database called `bamazon`.

DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

-- 2. Then create a Table inside of that database called `products`.
CREATE TABLE products (

-- 3. The products table should have each of the following columns:
   -- * item_id (unique id for each product)
    id int NOT NULL AUTO_INCREMENT,
   -- * product_name (Name of product)
   name VARCHAR(50) NOT NULL,
   -- * department_name
   department_name VARCHAR(50) NOT NULL,
   -- * price (cost to customer)
    price INTEGER (10),
   -- * stock_quantity (how much of the product is available in stores)
   stock_quantity INTEGER (10),

   PRIMARY KEY (ID),
);
--see data
SELECT * FROM [table name];
-- 4. Populate this database with around 10 different products. 
--(i.e. Insert "mock" data rows into this database and table).

INSERT INTO products (id, name, department_name, price, stock_quantity)
VALUES ("camera", "electronics", 100, 10);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("television", "electronics", 150, 9);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("iPhone", "electronics", 500, 8);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("windex", "household", 3, 50);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("toothpaste", "household", 3, 51)

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("ajax", "household", 4, 53);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("food", "pets", 30, 7);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("squeaky", "pets", 2, 20);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("blanket", "pets", 10, 10);

INSERT INTO products (name, department_name, price, stock_quantity)
VALUES ("litter", "pet", 15, 5);