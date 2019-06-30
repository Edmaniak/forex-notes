import {dbPassword} from "./constants";
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://admin:<Adik3714>@cluster0-p1zzs.mongodb.net/test?retryWrites=true&w=majority';
export const client = new MongoClient(uri, { useNewUrlParser: true });



