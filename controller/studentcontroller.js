exports.index=(req,res)=>{
    res.send("hello,mca student!\n")
}

exports.show=(req,res)=>{
     res.send(`hello sanju!\nid: ${req.params.id}`)
 }

 exports.store=(req,res)=>{
 res.send(`store the data!\n: ${req.body.name},${req.body.city}`)
 }

 exports.update=(req,res)=>{
  res.send(
      `data updated!\nid: ${req.params.id}, name: ${req.body.name}, ${req.body.city}`
  )
 }