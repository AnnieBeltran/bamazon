/*5. Then create a Node application called `bamazonCustomer.js`. 
Running this application will first display all of the items available for sale. 
Include the ids, names, and prices of products for sale.
*/

var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
  if (err) throw err;



  /*6. The app should then prompt users with two messages.
  require = inquire
  
     * The first should ask them the ID of the product they would like to buy.
     * The second message should ask how many units of the product they would like to buy.
     "what is the ID of the item you would like to buy"
     "how many stock quantity" */

  //"what is the ID of the item you would like to buy"
  // "how many stock quantity"
  // run the start function after the connection is made to prompt the user
  purchase();
});


// purchase function to prompt the customer for an item to purchase
let purchase = () => {
  inquirer.prompt([{
    type: "input",
    name: "item_id",
    message: "Select the item you would like to purchase by item number.",
  },
  {
    type: "input",
    name: "quantity",
    message: "How many of this item would you like to purchase?",
    validate: function(value) {
      if (isNaN(value) === false) {
        return true;
      }
      return false;
    }
  }

  ])
}

//.then(function(answer) {


// else {
  // console.log('\nSorry. There are not enough units for your purchase. \n Please try again.\n \n \n \n');


  // --- Prints ALL to the console ---
queryAllproducts()

function queryAllproducts() {
    connection.query("SELECT * FROM products", function (err, res) {

      for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
      }


      console.log("--------------The Menu---------------------");
    });
  }


/*
 //   7. Once the customer has placed the order, your application should check if your store has
 // enough of the product to meet the customer's request.
  //  * If not, the app should log a phrase like `Insufficient quantity!`, 
  //and then prevent the order from going through.

   // connection.query for-loop to print all products table
// --- Prints ALL to the console ---

queryAllproducts();

function queryAllproducts() {
  connection.query("SELECT * FROM products", function(err, res) {

    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity); 
    }
 
  
    console.log("-----------------------------------");
  });
}
 

 /*
function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity); 
    }
  });

  // logs the actual query being run
  console.log(query.sql);
}

/*




7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

   * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.



8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, show the customer the total cost of their purchase.

- - -

* If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.
*/