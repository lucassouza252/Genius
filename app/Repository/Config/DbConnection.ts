import * as mysql from 'mysql';

export class DbConnection{

    private connection;

    constructor(){

        this.connection = mysql.createConnection({
            host: 'localhost',
            port: 3306,
            user: 'root',
            password: 'senha',
            database: 'Genius'
        });
    }

    public conect(){

        this.connection.connect(function (err) {
            if (err) {
                console.error('Connection ' + err.stack);
                return;
            }
            console.log('Database Connected');
        });
    }
}
