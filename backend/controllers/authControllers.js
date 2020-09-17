
module.exports.create=(req,res)=>{

   console.log(req.body)
  res.send('create')
}
module.exports.signup_post=(req,res)=>{
   const user=req.body;
  // console.log('signup success',req.body)
   res.json(user);
  
}

module.exports.login_post=(req,res)=>{
   const user=req.body;
   res.json(user);
 }