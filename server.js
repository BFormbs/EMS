const mysql = require("mysql");
const inquirer = require("inquirer");
const console_table = require("console.table");
const clear = require("console.clear");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Monster126635",
    database: "employees_DB",
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
})

function startSearch() {
    inquirer.
    prompt({
        name: 'action',
        type: 'list',
        message: 'What would you like done?',
        choices: [
            'View all Employees',
            'View all Employees by Manager',
            'View all Employees by Department',
            'Add Employee',
            'Add Employee Role',
            "Add Employee Department",
            'Exit',
        ],
    }).then(function (res) {
        switch (res.action) {
            case 'View all Employees':
                //function for this
                break;

            case 'View all Employees by Manager':
                //function for this
                break;

            case 'View all Employees by Department':
                //function for this
                break;

            case 'Add Employee':
                //function for this
                break;

            case 'Add Employee Role':
                //function for this
                break;

            case 'Add Employee Department':
                //function for this
                break;

            case 'Exit':
                //function for this
                break;

        }
    })
}

//function for all emp
viewAll = () => {
    let all = "SELECT * FROM employees_db.employee;"
    connection.query
}