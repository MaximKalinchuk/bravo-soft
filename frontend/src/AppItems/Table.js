import React from "react";

function Table({ documents, users }) {
    // console.log(documents, users)

    const documentsCount = [];

    for (const document of documents) {
        let state = true;
        for (const documentItem of documentsCount) {
            if (documentItem.name === document.title) {
                state = false;
                break;
            }
        }
        if(state) {
            const documentTitle = document.title
            documentsCount.push({ name: documentTitle, count: 1});
        } else {
            for (let i = 0; i < documentsCount.length; i += 1) {
                if (documentsCount[i].name === document.title) {
                    documentsCount[i] = { name: document.title, count: documentsCount[i].count + 1};
                }
            }
        }
    }

    const documentsCopy = documentsCount.slice(0)
    const sortedDocuments = documentsCopy.sort((doc1, doc2) => doc1.count < doc2.count ? 1 : -1);

    // console.log(sortedDocuments)

    for (const user of users) {
        user.documents = []
    }

    // for (const user of users) {
    //     // console.log(user)
    //     for (const document of documents) {
    //         if (user.id === document.user_id) {
    //             user['documents'].push(document.title)
    //         }
    //     }
    // }

    // const usersCopy = users.slice(0)
    // const sortedUsers = usersCopy.sort((user1, user2) => user1.documents.length < user2.documents.length ? 1 : -1);

    // console.log(sortedUsers)
    
    return   ( 
        <>
    <center><p style={{marginTop: '30px', fontSize: '18px'}}>Тут вы можете просмотреть все оставленные заявки, а также удалить их при необходимости.</p></center>
            {/* <div className="mainTable">
                {sortedUsers.map((user, index) => <div key={index} className="person"><h3>{user.name}</h3><h4>Всего: {user.documents.length}</h4>{user.documents.map((doc, index) => <p key={index}>{doc}</p>)}</div>)}
            </div> */}
    <center>
        <table style={{marginTop: '20px'}} className="table table-bordered w-200">
            <thead className="thead-dark ">
                <tr>
                <th scope="col">#</th>
                <th scope="col">Наименование документа</th>
                <th scope="col">Количество заявок</th>
                </tr>
            </thead>
            <tbody>
                {sortedDocuments.map((document, index) => {
                    return <tr key={index} ><th scope="row">{index + 1}</th><td>{document.name}</td><td>{document.count}</td></tr>
                    })
                }
            </tbody>
        </table>
    </center>
    </>
   )}


export default Table;