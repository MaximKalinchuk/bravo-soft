import React, {useState} from "react";
import UserItem from './UserItem';

function AddTableItem({ addData, users}) {
    const [value, setValue] = useState('')

    return (
        <form className="App-form" onSubmit={addData}>
            <select>
            {users ? users.map((user, index) => <UserItem key={index} user={user.name}/>) : 'Loading Users'}
            </select><br />
            <input type="text" value={value.toUpperCase()} placeholder="Введите нужный гост" onChange={(event) => setValue(event.target.value)} />
            <button className="btn btn-primary" type='submit'>Отправить</button>
        </form>
    )

}

export default AddTableItem;