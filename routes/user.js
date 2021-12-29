const router = require("express").Router();


router.get('/user', (req, res)=> {
  res.send('Hello this is user route')
})

module.exports = router