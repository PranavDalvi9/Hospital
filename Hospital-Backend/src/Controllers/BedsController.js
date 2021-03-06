const express = require("express")
const Class = require("../Modals/BedsModal");

const router = express.Router()

router.post("",async(req,res) => {
    try {
        console.log(req.body)
        const classCon = await Class.create(req.body)
        return res.send(classCon)
    } catch (error) {
       return res.send(500).send({message: error.message})
    }
})



router.get("", async (req, res) => {
    try {
      const classCon = await Class.find().lean().exec();
      console.log(classCon)
      return res.send(classCon)
    } catch (error) {
      return res.send(error);
    }
  });



  router.patch("/:id", async (req, res) => {
    try {
      const classCon = await Class.findByIdAndUpdate(req.params.id, req.body,{new:true}).lean().exec();
      console.log(classCon)
      return res.send(classCon)
    } catch (error) {
      return res.send(error);
    }
  });

module.exports= router