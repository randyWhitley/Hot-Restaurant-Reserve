const express = require("express");
const path = require("path");

let app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let table = [
    { // 0
        name: "lala",
        phone: "111",
        email: "111@111.com",
        id: "11"
    },
    { // 1
        name: "frank",
        phone: "222",
        email: "222@222.com",
        id: "22"
    },
    { // 2
        name: "Denice",
        phone: "333",
        email: "333@333.com",
        id: "33"
    },
    { // 3
        name: "Meanie",
        phone: "444",
        email: "444@444.com",
        id: "44"
    },
    { // 4
        name: "George",
        phone: "555",
        email: "555@555.com",
        id: "55"
    },
    { // 5
        name: "Thomas",
        phone: "666",
        email: "666@666.com",
        id: "66"
    },
    { // 6
        name: "Mary",
        phone: "777",
        email: "777@777.com",
        id: "77"
    }
];

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/api/table", function (req, res) {
    return res.json(table.slice(0, 5));
});
app.get("/api/waitinglist", function (req, res) {
    return res.json(table.slice(6));
});

app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
