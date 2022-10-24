const express = require('express');
const db = require('./db')
// const userRouter = require('./routes/user.routes')
// const bodyParser = require('body-parser')

const PORT = process.env.PORT || 3001

const app = express();

// app.use('/api', userRouter)

app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`);
})

// app.use(bodyParser.json())
app.use(express.json())

app.post('/document-add-api', async (req, res) => {
    console.log(req.body)
    const { userID, userName, documentName } = req.body
    const newDocument = await db.query(`INSERT INTO document (title, user_id) values ($1, $2) RETURNING *`, [documentName, userID])
    // res.send(console.log(newDocument))
})

app.post('/document-delete-api', async (req, res) => {
    const newDocument = await db.query(`DELETE FROM DOCUMENT *`)
    // res.send(console.log(newDocument))
})

app.get('/user-api', async (req, res) => {
    const persons = await db.query(`SELECT * FROM person`)
    const documents = await db.query(`SELECT * FROM document`)
    res.json({ users: persons.rows, documents: documents.rows })

    console.log('Запрос!', persons.rows)
    console.log('Запрос!', documents.rows)
})