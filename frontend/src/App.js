
import React, {useState, useEffect} from 'react';
import AddTableItem from './BSApp/AddTableItem';
import axios from 'axios';

function App() {

  const [users, setUsers] = useState(null)
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    axios.get('/user-api')
    .then((response) => {
      setUsers(response.data.users)
      setDocuments(response.data.documents)
    })
  }, [])

  console.log(documents)

  function addData(e) {
    e.preventDefault()
    const userName = e.target[0].value;
    const document = e.target[1].value
    console.log('Пользователь:', userName)
    console.log('Нужный ему документ:', document)

    const userID = users.filter((user) => user.name === userName)[0].id
    console.log(userID)
    axios.post('/document-add-api', {userID, userName, document})
    .then((response) => console.log(JSON.parse(response.config.data)))
    alert('Документ добавлен')
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddTableItem addData={addData} users={users}/>
      </header>
    </div>
  );
}

export default App;
