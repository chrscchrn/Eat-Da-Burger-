var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Tiger.sql12",
    database: "burgers_db"
});

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'w1h4cr5sb73o944p.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'vh3vc060qiay8c1e',
        password: 'bjd8mdwzufznz0dq',
        database: 'gqxtajze4a04vqqq'
    })
}

connection.connect((err) => {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
