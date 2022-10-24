import React from "react";

function Table({ documents, users }) {
    // console.log(documents, users)

    for (const user of users) {
        user.documents = []
    }

    for (const user of users) {
        console.log(user)
        for (const document of documents) {
            if (user.id === document.user_id) {
                user['documents'].push(document.title)
            }
        }
    }

    console.log(users)



    
    return   ( 
            <div className="table">
                {users.map((user, index) => <div key={index} className="person"><h3>{user.name}</h3>{user.documents.map((doc, index) => <p key={index}>{doc}</p>)}<h4>Всего: {user.documents.length}</h4></div>)}
            </div>
   )}


export default Table;