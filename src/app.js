const express = require('express');
const db = require('./database/database.js');
const tasksRoutes = require('./routes/tasks.routes');


const app = express();
const PORT = process.env.PORT || 4000;


//middlewares
app.use(express.json());
app.use(tasksRoutes);


async function testConnection() {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}...`);
        });
        //sync all models with database force true will drop the table if it already exists
        await db.sync({ force: true });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        }
    }

testConnection();