
import React, {useState, useEffect, useRef} from 'react';
import AddTableItem from './AppItems/AddTableItem';
import axios from 'axios';
import Table from './AppItems/Table';
import Menu from './AppItems/Menu'


function App() {

  const [users, setUsers] = useState([])
  const [documents, setDocuments] = useState([])
  const [page, setPage] = useState(true)
  const [value, setValue] = useState('')
  const inputElement = useRef(null)

  useEffect(() => {
    axios.get('/user-api')
    .then((response) => {
      setUsers(response.data.users)
      setDocuments(response.data.documents)
    })
  }, [])

  // console.log(documents)

  function addData(e) {  // Функция добавления нового документа в БД
    const userName = e.target[0].value;
    const documentName = e.target[1].value

    try {
      const userID = users.filter((user) => user.name === userName)[0].id // получаю id пользователя, который отправил форму

      for (const document of documents) {  // Валидация. Проверяю есть ли уже такой документ в БД у конкретного пользователя
          if (document.title === documentName && userID === document.user_id) {
            throw new Error()
          }
        }

        if (documentName.length === 0) {
          alert('Вы не ввели название документа')
        } else {
          axios.post('/document-add-api', {userID, userName, documentName})
          .then((response) => console.log(JSON.parse(response.config.data)))
          alert('Заявка добавлена')
          setDocuments([...documents, {title: documentName, user_id: userID}])
          setValue('')
          inputElement.current.focus()
        }
    }catch(e) {
        alert("Вы уже отправляли заявку на этот документ, она уже была учтена")
      }
  }

  function deleteAllDocuments(e) {
    axios.post('/document-delete-api', {})
    setDocuments([])
  }

  function setFirstPage() {
    setPage(true)
  }

  function setSecondPage() {
    setPage(false)
  }

  console.log(page)

  if (page) {
    return (
      <div className="App">
        <header>
          <Menu setSecondPage={setSecondPage} setFirstPage={setFirstPage}/>
        </header>
        <main>
        <AddTableItem inputElement={inputElement} addData={addData} value={value} users={users} setValue={setValue} />
        </main>
      </div>
    );
  }

  if (!page) {
    return (
      <div className="App">
        <header>
          <Menu setSecondPage={setSecondPage} setFirstPage={setFirstPage}/>
        </header>
        <main>
        <Table documents={documents} users={users}/>
        <center><button style={{marginTop: '50px'}} className='btn btn-danger' onClick={deleteAllDocuments}>Удалить все заявки</button></center>
        </main>
      </div>
    );
  }
}

export default App;
