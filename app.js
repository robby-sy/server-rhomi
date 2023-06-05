const express = require('express')
const app = express()
const port = 3000;
const {Data} = require('./models')
const { Op } = require("sequelize");
const cors = require('cors')

app.use(cors())

app.get('/data',async (req,res)=>{
    let options = {}
    let where = {}
    try {
        let {start} = req.query
        let {attribute} = req.query 
        if(start){
            where.createdAt={
                [Op.between] : [new Date(start),new Date(start+' 23:00')]
            }
        }
        if(attribute){
            options.attributes=[`${attribute}`]
        }
        options.where = where
        console.log(options);
        let data = await Data.findAll(options)
        res.status(200).json({data})
    } catch (error) {
        res.send(error)
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })