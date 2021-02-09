const PersonDetails = ({id ,name, number, handleDeletePerson}) =>{
    return (
        <div>
            {name} {number} 
            <button onClick={()=> handleDeletePerson(id)}>Delete</button>
        </div>
    )
}

const Persons = ({personsToShow, handleDeletePerson}) => {
    return (
        <div>
            {
                personsToShow.map(person =>{
                    return <PersonDetails 
                                key={person.name}
                                id={person.id}
                                name={person.name}
                                number={person.number}
                                handleDeletePerson={handleDeletePerson}                                
                            />
                })
            }
            
        </div>
    )
}

export default Persons
