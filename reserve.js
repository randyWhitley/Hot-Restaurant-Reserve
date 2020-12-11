const express = require("express");
//const path = require("path");

let app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let table = [
    {
    name: "",
    phone: "",
    email: "",
    id: ""
    }
]