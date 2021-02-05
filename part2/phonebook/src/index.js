import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  useEffect(() => {

    axios
      .get('http://localhost:3001/persons')
      .then(response => {     
        setPersons(response.data)  
      })

  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault()

    const newObjName = { name: newName, number: newPhone }

    if(persons.some(e => e.name.toLowerCase() === newName.toLowerCase())){
      alert(`${newName} is already added to phonebook`)
      
    }else{      
      setPersons(persons.concat(newObjName).sort((a, b) => a.name.localeCompare(b.name)))
      setNewName('')
      setNewPhone('')
    }
  }

  const handleChangeName = (e) =>{   
    setNewName(e.target.value)
  }

  const handleChangePhone = (e) =>{   
    setNewPhone(e.target.value)
  }

  const handleChangeFilterName = (e) =>{
    setFilterName(e.target.value.toLowerCase())
  }

  const personsToShow = filterName.length > 0
    ? persons.filter(e => e.name.toLowerCase().startsWith(filterName))
    : persons

  return (
    <div>
      <h2>Phonebook</h2> 

      <Filter handleChange={handleChangeFilterName}/>

      <h3>add a new</h3> 

      <PersonForm 
        submit={handleSubmit}
        newName={newName}
        handleChangeName={handleChangeName}
        newPhone={newPhone}
        handleChangePhone={handleChangePhone}
      />
      
      <h3>Numbers</h3>

      <Persons personsToShow={personsToShow} />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
