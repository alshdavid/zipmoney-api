const { searchUsers } = require("../../services/users.service")
const express = require('express')
const app = express();
const router = express.Router()

router.post('', async (req, res) => {
    try {
        let s = await searchUsers(req.body.term)
        res
            .status(200)
            .set('Message', "Users Found")
            .send(s)     
    } catch (error) {
        res
            .status(400)
            .set('Message', error)
            .send({ message: error })   
    }
})


module.exports = { 
    router 
}