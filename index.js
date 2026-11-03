import express from "express";

const app = express();
app.get("/api/szoveg", (req, res) => {
    res.send("Ez egy szöveg alapú válasz!!");
});

app.get("/api/szam", (req, res) => {
    res.send(69);
});

app.get("/api/obj", (req, res) => {
    res.send({termek: "egér", ar: "4990 Ft"});
});

app.get("/api/json", (req, res) => {
    res.send({"host": "localhost", "ip": "::1"});
});

app.get("/api/tomb", (req, res) => {
    res.send([1,2,3,4,5]);
});

app.get("/api/json2", (req, res) => {
    res.json("szoveg");
});


app.get("/api/", (req, res) =>{
    res.send("Ez az api gyökere");
});

app.get("/api/vegtelen", (req, res) =>{
    res.status(404);
});

app.get("/api/hibaskuldes", (req, res) =>{
    res.json("Ez egy hibás státuszú küldés").status(404);
});

app.get("/api/csakstatusz", (req, res) =>{
    res.sendStatus(500);
});


app.get("/api/products/:id", (req, res) =>{
    res.json({id: req.params.id});
});

app.get("/api/products/:id/:name", (req, res) =>{
    res.json({id: req.params.id, name: req.params.name});
});

app.get("/api/query", (req, res) =>{
    res.json({parameterek: req.query});
})

app.get("/api/fajlok/*utvonal", (req, res) =>{
    res.json({parameterek: req.params.utvonal});
});


app.get("/api/termek{/:id}", (req, res) =>{
    if(req.params.id === undefined){
        return res.json("Nincs megadva az id paraméter");
    }
    res.json({id: req.params.id});
});


app.post("/api/products", (req, res) =>{
    res.status(201).json({"uzenet": "A termék sikeresen létrehozva"});
});

app.delete("/api/products/:id", (req, res) =>{
    console.log(`A termék sikeresen törölve: ${req.params.id}`);
    res.status(204).json({"uzenet": `A termék sikeresen törölve: ${req.params.id}`});
});



app.get((req, res) =>{
    res.status(404).json({
        error: {
            message: "Nem létezik a kívánt erőforrás"
        }
    });
});

app.listen(3000, (err) => {
    if (err) throw err;
    console.log("A szerver elindult a 3000-es porton.");
});