const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'127.0.0.1',
    port:'3306',
    database:'manipulacion',
    user:'root',
    password:'123456'
});

conexion.connect();

var user = conexion.query("SELECT * FROM users ",function(error,result,fields){
    result.forEach(response=>{
        console.log(response);
    })
});
/*
var user = conexion.query("SELECT * FROM users INNER JOIN students ON users.id = students.user_id ",function(error,result,fields){

        console.log(response);


});*/

/*var user2 = conexion.query("INSERT INTO users (username,password,email, name) VALUES ('cmartines','123456','carlos@gmail.com','Carlos')",function(error,result,fields){

});*/
//console.log(user2);
conexion.end();


