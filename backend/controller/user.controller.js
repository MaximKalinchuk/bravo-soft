class UserController {
    async addDocument(req, res) {
        const { title } = req.body
        console.log(title)
        res.json('ok')
    }
    async getDocuments(req, res) {

    }
}

module.exports = new UserController()