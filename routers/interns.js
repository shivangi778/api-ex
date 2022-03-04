const express= require('express')
const res = require('express/lib/response')
const intern = require('../models/intern')
const router = express.Router()
const Intern = require('../models/intern')


router.get('/', (req,res) => {
    try{
        const interns = await Intern.find()
        res.json(interns)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get('/:id', (req,res) => {
    try{
        const intern = await Intern.findbyId(req.params.id)
        res.json(intern)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.post('/', async(req,res) => {
    const intern = new Intern({
        name: req.body.name,
        id : req.body.id,
        attendance : req.body.attendance
    })

    try{
        const i1 = await intern.save()
        res.json(i1)
    }catch(err){
        res.send('Error')
    }
})

router.patch('/:id',async(req,res)=> {
    try{
        const intern = await Intern.findById(req,params.id)
        intern.attendance = req.body.attendance
        const i1 = await intern.save()
        res.json(i1)
    }catch(err){
        res.send('Error')
    }
})
module.exports = router
