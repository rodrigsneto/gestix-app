import express, {Request, Response} from 'express';
import mustache from 'mustache-express';
import dotenv from 'dotenv';
import path from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache())

server.use(express.urlencoded({extended:true}))
server.use('/static', express.static(path.join(__dirname, '../public')));

server.use(mainRoutes)


server.use((req: Request, res: Response)=>{
    res.status(404).send('STATUS 404 : Pagina não encontrada!');
});
server.listen(process.env.PORT);