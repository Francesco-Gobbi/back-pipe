import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors({
    origin: ['https://test-pipe-bzak.onrender.com',"http:/localhost:5173"], 
    methods: ['GET', 'POST'], 
    allowedHeaders: ['Content-Type', 'Authorization','']
}));

app.get('/data', (req, res) => {
    res.status(200).json([{
        nome: "penna",
        numero: 10
    },{
        nome: "biro",
        numero: 20
    }]);
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
});
