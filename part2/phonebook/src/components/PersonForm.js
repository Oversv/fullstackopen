const PersonForm = ({newName, newPhone, submit, handleChangeName, handleChangePhone}) => {
    return (
        <form onSubmit={submit}>
            <div>
                name: 
                <input 
                    value={newName}
                    onChange={handleChangeName} 
                    required
                />
            </div>
            <div>
                number: 
                <input 
                    type="tel" 
                    onChange={handleChangePhone} 
                    value={newPhone}
                    required
                />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
      </form>
    )
}

export default PersonForm
