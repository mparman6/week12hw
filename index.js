var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'lsutiger6',
    database: 'zoo_db'
});



connection.connect(function(err) {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return;
        };
        console.log('connected as id ' + connection.threadId);
    });



     var prompt = require('prompt');
 
  // 
  // Start the prompt 
  // 
  prompt.start();
  
  
  prompt.message = "";

  

  // zoo object

  var zoo = new Object();
  zoo.welcome = function() {
    console.log("Welcome to the Zoo And Friends App~!");
  }
  zoo.menu = function() {
    console.log("Enter (A): ------> to Add a new animal to the Zoo!");
    console.log("");
    console.log("Enter (U): ------> to Update info on an animal in the Zoo!");
    console.log("");
    console.log("Enter (V): ------> to Visit the animals in the Zoo!");
    console.log("");
    console.log("Enter (D): ------> to Adopt an animal from the Zoo!");
    console.log("");
    console.log("Enter (Q): ------> to Quit and exit the Zoo!");
    console.log("");

  }
  zoo.add = function(input_scope) {
    var current_scope = input_scope;
    console.log("To add an animal to the zoo please fill out the following form for us!");
    prompt.get(array["name", "type", "age"], function(err, result){
      connection.query();

    });

  currentScope.menu();
  currentScope.promptUser();
  }
  zoo.visit = function() {
    console.log("Enter (I): ------> do you know the animal by it's id? We will visit that animal!");
    console.log("");
    console.log("Enter (N): ------> do you know the animal by it's name? We will visit that animal!");
    console.log("");
    console.log("Enter (A): ------> here's the count for all animals in all locations!");
    console.log("");
    console.log("Enter (C): ------> here's the count for all animals in this one city!");
    console.log("");
    console.log("Enter (O): ------> here's the count for all the animals in all locations by the type you specified!");
    console.log("");
    console.log("Enter (Q): ------> Quits to the main menu!");

    currentScope.visit();
    currentScope.view(currentScope);
    

  }
  zoo.view = function() {
    var currentScope = input_scope;
    console.log("Please choose what you would like to visit.");

    prompt.get(array[visit], function(err, result) {
      if (result.visit === "Q") {
        currentScope.menu();
      } else if (result.visit === "O") {
        currentScope.type(input_scope);
      } else if (result.type === "I") {
        currentScope.type(input_scope);
      } else if (result.animId === "N") {
        currentScope.name(input_scope);
      } else if (result.name === "A") {
        currentScope.all(input_scope);
      } else if (result.all === "C") {
        currentScope.care(input_scope);
      } else {
        console.log("Sorry didn't get that, come again?");
        currentScope.visit();
        currentScope.view(currentScope);
      }
    });
  }
  zoo.type = function(input_scope) {
    var currentScope = input_scope;
    console.log("Enter animal type to find how many animals we have of those type.");

    prompt.get(array[animal_type], function(err, result) {
      connection.query();

    });

    currentScope.menu();
    currentScope.promptUser();
  }
  zoo.care = function(input_scope) {
    var currentScope = input_scope;
    console.log("Enter city name NY/SF.");

    prompt.get(array[city_name], function(err, result) {
      connection.query();

    });

    currentScope.menu();
    currentScope.promptUser();

  }
  zoo.animId = function(input_scope) {
    var currentScope = input_scope;
    console.log("Enter ID of the animal you want to visit.");

    prompt.get(array[animal_id], function(err, result) {
      connection.query();

    });

    currentScope.menu();
    currentScope.promptUser();
  }
  zoo.animName = function(input_scope) {
    var currentScope = input_scope;
    console.log("Enter Name of the animal you want to visit.");

    prompt.get(array[animal_name], function(err, result) {
      connection.query();

    });

    currentScope.menu();
    currentScope.promptUser();
  }
  zoo.all = function(input_scope) {
    var currentScope = input_scope;
    console.log("Hit Enter to find out how many animals there are.");

    prompt.get(array[total_count], function(err, result) {
      connection.query();

    });

    currentScope.menu();
    currentScope.promptUser();
  }
  zoo.update = function(input_scope) {
    var currentScope = input_scope;
    console.log("Hit Enter to find out how many animals there are.");

    prompt.get(array['id','new_name','new_age','new_type','new_caretaker_id'], function(err, result) {
      connection.query();

    });

    currentScope.menu();
    currentScope.promptUser();
  }
  zoo.adopt = function () {
    var currentScope = input_scope;

    prompt.get(array['animal_id'], function(err, result) {
      connection.query();

    });

    currentScope.menu();
    currentScope.promptUser();
  }
  zoo.promptUser = function() {
    var self = this;

    prompt.get("input", function(err, result) {
      if (result.input === "Q") {
        self.exit();
      } else if (result.input === "A") {
        self.add(self);
      } else if (result.input === "V") {
        self.visit();
        self.view(self);
      } else if (result.input === "D") {
        self.adopt(self);
      } else {
        console.log("Sorry I didn't get that, come again?");
      }
    });

  }
  zoo.exit = function() {
    console.log("Thank you for visiting. Goodbye!");
  }
  zoo.open = function() {
    this.welcome();
    this.menu();
    this.promptUser();
  }


zoo.open();





