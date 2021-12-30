const { verifyToken,verifyTokenAndAuthorization } = require("./verifyToken");

const router = require("express").Router();

router.put("/:id", verifyTokenAndAuthorization,async (req, res)=> {
  if(req.body.password){
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_PASS
    ).toString();
  }
  try {
     const updateUser = await User.findByIdAndUpdate(req.params.id, {
       $set: req.body
     }, {new: true})
  }catch(err){
    res.status(5000).json(err);
  }
} )

module.exports = router;
