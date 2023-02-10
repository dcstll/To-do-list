const router = require("express").Router();
const toDo = require("../models/toDo");

router.get("/", (req, res) => {
    toDo.find((err, result) => {
        if (err) throw new Error(err);
        console.log(result);
    });
});

router.post("/new", (req, res) => {
    toDo.create(req.body, (err, result) => {
        if (err) throw new Error(err);
        console.log(result);
    });
});

router.delete("/:id", (req,res) => {
    toDo.findOneAndRemove({_id:req.body.id}, (err,result) =>{
        if (err) throw new Error(err);
        console.log(result);
    })
})

module.exports = router;