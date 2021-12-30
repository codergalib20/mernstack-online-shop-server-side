const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const usersRoute = require('./routes/user')
const authRoute = require('./routes/auth')


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log('Connection success'))
.catch(err => console.log(err))



app.use(express.json());
app.use('/api/auth', authRoute)
// app.use('/users', usersRoute);

app.get('/', (req, res) => {
  res.send('Hello world')
})






app.listen(process.env.PORT || 5000, () => {
  console.log("run fullstack online shop");
});

/* Personal Info{DB_USER=fullstackOnlineShop
DB_PASS=vVhFf5bqvgNMtO4Z} */
