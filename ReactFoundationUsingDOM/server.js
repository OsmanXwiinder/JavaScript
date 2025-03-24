const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors());
const state = [
    { title: "Gym", description: "Go to gym from 7-9pm", id: 1 },
    { title: "Groceries", description: "Buy milk, bread, and eggs", id: 2 },
    { title: "Work", description: "Finish project report by 5pm", id: 3 },
    { title: "Call Mom", description: "Check in at 6pm", id: 4 },
    { title: "Read", description: "Finish chapter 3 of book", id: 5 },
    { title: "Laundry", description: "Wash clothes tonight", id: 6 },
    { title: "Meeting", description: "Team sync at 10am", id: 7 },
    { title: "Code", description: "Debug login feature", id: 8 },
    { title: "Walk Dog", description: "30 mins in the park", id: 9 },
    { title: "Pay Bills", description: "Due by end of day", id: 10 },
    { title: "Cook", description: "Make pasta for dinner", id: 11 },
    { title: "Study", description: "Review notes for exam", id: 12 },
    { title: "Email", description: "Reply to client ASAP", id: 13 },
    { title: "Clean", description: "Vacuum living room", id: 14 },
    { title: "Shop", description: "Get new shoes online", id: 15 }
];

app.get('/todos', (req,res) => {
   let Randomindex = Math.floor(Math.random() * state.length);
   let Randomtodo = state[Randomindex];

   res.status(200).send(Randomtodo);
})




const port = 3000;
app.listen(port, () => console.log("server started"))