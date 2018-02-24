import { db } from "./config";

export function GetAllItems(){
    return db.ref('courses').once('value')
}