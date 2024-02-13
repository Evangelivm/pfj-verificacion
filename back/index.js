const express = require('express');
const config = require('./config');
const app = express();
const indexRoutes = require('./routes/index.routes')
const tasksRoutes = require('./routes/tasks.routes')

app.use(indexRoutes);
app.use(tasksRoutes);

app.listen(config.PORT);
console.log(`Server is running on port ${config.PORT}`);
