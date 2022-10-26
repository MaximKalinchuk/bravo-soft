import UserItem from './UserItem';

function AddTableItem({ addData, users, value, setValue, inputElement}) {

    return (
        <>
        <center><p style={{marginTop: '30px', fontSize: '18px'}}>Оставьте заявку на недостающий документ.</p></center>
        <div className="form">
            <form className="d-flex" onSubmit={addData}>
                <select className="form-control form-control-lg" style={{width: '300px'}}>
                {users ? users.map((user, index) => <UserItem key={index} user={user.name}/>) : 'Loading Users'}
                </select><br />
                <input ref={inputElement} type="text" style={{width: '700px', marginLeft: '1%'}} value={value.toUpperCase()} placeholder="Введите нужный вам документ" onChange={(event) => setValue(event.target.value)} />
                <button className="btn btn-primary" style={{width: '200px', marginLeft: '1%'}} type='submit'>Отправить</button>
            </form>
        </div>
        </>
    )

}

export default AddTableItem;