import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import './Person.scss';

const Person = () => {
  const [person, setPerson] = useState({
    name: '',
    email: '',
    phoneNumber: ''
  });

  const generateFullPerson = () => {
    const person = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number({ style: 'national' })
    }
    setPerson(person)
  }


  useEffect(() => {
    generateFullPerson()
  }, [])
  return (
    <>
      <Button onClick={generateFullPerson}>Generate new person</Button>
      <Button onClick={() => {navigator.clipboard.writeText(JSON.stringify(person))}}>Copy JSON</Button>
      <section className='person-data_container'>
        <div className='input_container'>
          Name:
          <div>
            <Input disabled type="text" value={person.name} />
            <span 
              onClick={() => {navigator.clipboard.writeText(person.name)}} className="material-symbols-outlined"
            >
              content_paste
            </span>
          </div>
        </div>
        <div className='input_container'>
          Email Address:
          <div>
            <Input disabled type="email" value={person.email} />
            <span 
              onClick={() => {navigator.clipboard.writeText(person.email)}} className="material-symbols-outlined"
            >
              content_paste
            </span>
          </div>
        </div>
        <div className='input_container'>
          Phone number:
          <div>
            <Input disabled type="text" value={person.phoneNumber} />
            <span 
              onClick={() => {navigator.clipboard.writeText(person.phoneNumber)}} className="material-symbols-outlined"
            >
              content_paste
            </span>
          </div>
        </div>
      </section>
      
    </>
  )
}

export default Person