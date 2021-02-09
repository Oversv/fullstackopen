import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newPhone, setNewPhone ] = useState('')
  const [ filterName, setFilterName ] = useState('')

  useEffect(() => {
    getAllPerson()
  }, [])

  const handleSubmit = (e) =>{
    e.preventDefault()

    const newObjName = { name: newName, number: newPhone }
    const duplicatePerson = persons.filter(e => e.name.toLowerCase() === newName.toLowerCase())
 
    if(duplicatePerson.length > 0){
      const id = duplicatePerson[0].id
      const confirm = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)

      if(confirm){
        handleUpdatePerson(id, newObjName)
      }
      
    }else{      
      handleCreatePerson(newObjName)
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

  const getAllPerson = () =>{
    personService
    .getAll()
    .then(data => setPersons(data.sort((a, b) => a.name.localeCompare(b.name))))
  }

  const handleCreatePerson = (newObjName) =>{
    personService
    .create(newObjName)
    .then(data => setPersons(persons.concat(data).sort((a, b) => a.name.localeCompare(b.name)))) 

    setNewName('')
    setNewPhone('')
  }

  const handleUpdatePerson = (id, newObjName) =>{
      personService
      .update(id, newObjName) 
      .then(data => setPersons(persons.map(p => p.id !== id ? p : data)))

      setNewName('')
      setNewPhone('')
  }

  const handleDeletePerson = (id) =>{
    const deleteUser = persons.filter(p => p.id === id)
    const confirm = window.confirm(`Delete ${deleteUser[0].name}`)

    if(confirm){
      personService
      .remove(id)
      .then(setPersons(persons.filter(p => p.id !== id)))    
    }
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

      <Persons 
        personsToShow={personsToShow} 
        handleDeletePerson={handleDeletePerson}
        />

    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
