const Router = require('express')
const router = new Router()
const userController = require('../controller/user.controller')

router.post('/user', userController.addDocument)
router.get('/user', userController.getDocuments)

module.exports = router;