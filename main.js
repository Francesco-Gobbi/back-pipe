import express from "express";

const app = express();
app.use(express.json());

app.get('/data', (req, res) => {
    res.status(200).json({nome: "João", idade: 20, oggetti: [{
        nome: "penna",
        numero: 10
    },{
        nome: "biro",
        numero: 20
    }]});
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
