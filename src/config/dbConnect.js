import mongoose from "mongoose";

mongoose.connect("mongodb+srv://DaniloMBezerra:D%40nilo0002@alura.vvhfw.mongodb.net/Alura-node");

let db = mongoose.connection;

export default db;