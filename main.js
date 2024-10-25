import {fastapi} from 'fastapi';
import {readFile} from "fs"
import dotenv from "dotenv"
dotenv.config()

const db = require('./db.json');

fastapi.get('/data', (req, res) => {
    res.status(200).json(db);
    })


fastapi.