import * as express from 'express';
import { IBookRepository } from './IBookRepository';
import { Book } from '../Models/Book';
import { DbConnection } from './Config/DbConnection';

export class BookRepository implements IBookRepository{

    db: DbConnection = new DbConnection();

    find(req: express.Request, res: express.Response): Array<Book>{

        let books = new Array<Book>();

        this.db.conect();
        this.db.connection.query('SELECT * from Book', function(err, res){
            if(err){
                throw err;
            }
            else{
                this.books = res;
            }
        });

        this.db.desconect();
        return books;
    }

    findById(req: express.Request, res: express.Response): Book{

        let book = new Book();

        this.db.conect();
        this.db.connection.query('SELECT * FROM Book WHERE id=' + req.params.id, function(err, res){
            if(err){
                throw err;
            }
            else{
                this.book = res;
            }
        });

        this.db.desconect();
        return book;
    }

    create(req: express.Request, res: express.Response): boolean{

        let result: boolean = false;

        this.db.conect();
        this.db.connection.query('INSERT INTO Book set ?', req.body, function(err, res){
            if(err){
                throw err;
            }
            else{
                result = true;
            }
        });

        return result;
    }

    update(req: express.Request, res: express.Response): boolean{

        let result: boolean = false;

        this.db.conect();
        this.db.connection.query('UPDATE Book set ? where id = ?', [req.body, req.params.id],
        function(err, rows){
            if(err){
                throw err;
            }
            else{
                result = true;
            }
        });

        this.db.desconect();
        return result;
    }

    delete(req: express.Request, res: express.Response): boolean{

        let result: boolean = false;

        this.db.conect();
        this.db.connection.query('DELETE from Book where id='+ req.params.id, function(err, res){
            if(err){
                throw err;
            }
            else{
                result = true;
            }
        });

        this.db.desconect();
        return result;
    }
}
