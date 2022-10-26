
import React, {useState, useEffect} from 'react';
import AddTableItem from './AppItems/AddTableItem';
import axios from 'axios';
import Table from './AppItems/Table';

function App() {

  const [users, setUsers] = useState([])
  const [documents, setDocuments] = useState([])

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

        axios.post('/document-add-api', {userID, userName, documentName})
        .then((response) => console.log(JSON.parse(response.config.data)))
        alert('Заявка добавлена')
    }catch(e) {
        alert("Вы уже отправляли заявку на этот документ, она уже была учтена")
      }
  }

  function deleteAllDocuments(e) {
    axios.post('/document-delete-api', {})
    setDocuments([])
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddTableItem addData={addData} users={users}/><br />
        <button className='btn btn-danger' onClick={deleteAllDocuments}>Удалить все документы</button>
      </header>
      <main>
      <Table documents={documents} users={users}/>
      </main>
    </div>
  );
}

export default App;
