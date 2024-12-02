import { useCallback, useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Button } from '@/components/ui/button';
import { useToast } from "@/hooks/use-toast"
import './Person.scss';
import Input from '@/components/Input/Input';

interface PersonInterface {
  name: string;
  email: string;
  phoneNumber: string;
  gender: string;
  birthdate: Date;
  address: {
    street: string;
    number: string;
    zipcode: string;
    country: string;
    city: string;
    state: string;
  }
}

const Person: React.FC = () => {
  const [person, setPerson] = useState<PersonInterface | null>(null);
  const { toast } = useToast()
    
  const generateFullPerson = useCallback((): PersonInterface => {
    const person: PersonInterface = {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      phoneNumber: faker.phone.number({ style: 'national' }),
      gender: faker.person.gender(),
      birthdate: faker.date.birthdate(),
      address: {
        street: faker.location.street(),
        number: faker.location.buildingNumber(),
        zipcode: faker.location.zipCode(),
        country: faker.location.country(),
        city: faker.location.city(),
        state: faker.location.state()
      },
    }
    return(person)
  }, [])

  useEffect(() => {
    setPerson(generateFullPerson())
  }, [generateFullPerson])

  const generateNewPerson = (): void => {
    setPerson(generateFullPerson())
  }

  const copyToClipboard = (value: string): void =>{
    navigator.clipboard.writeText(value)
    toast({
      title: "Text copied to clipboard",
    })
  }

  return (
    <div className='person_container'>
      {person && (
        <>
          <section className='person-data_container'>
            <h2>Personal Info</h2>
            <Input label='Name' value={person.name} copyToClipboard={() => copyToClipboard(person.name)} />

            <Input label='Email Address' value={person.email} copyToClipboard={() => copyToClipboard(person.email)} />

            <Input label='Phone Number' value={person.phoneNumber} copyToClipboard={() => copyToClipboard(person.phoneNumber)} />


            <div className='input_wrapper'>
              <Input label='Birthdate' value={person.birthdate.toLocaleDateString()} copyToClipboard={() => copyToClipboard(person.birthdate.toLocaleDateString())} />
              
              <Input label='Gender' value={person.gender} copyToClipboard={() => copyToClipboard(person.gender)} />
            </div>

            <span className='divider'></span>

            <h2>Address</h2>

            <div className='input_wrapper'>
              <Input label='Street' value={person.address.street} copyToClipboard={() => copyToClipboard(person.address.street)} />
              <Input label='Number' value={person.address.number} copyToClipboard={() => copyToClipboard(person.address.number)} />
            </div>

            <div className='input_wrapper'>
              <Input label='City' value={person.address.city} copyToClipboard={() => copyToClipboard(person.address.city)} />
              <Input label='Zipcode' value={person.address.zipcode} copyToClipboard={() => copyToClipboard(person.address.zipcode)} />
            </div>

            <div className='input_wrapper'>
              <Input label='State' value={person.address.state} copyToClipboard={() => copyToClipboard(person.address.state)} />
              <Input label='Country' value={person.address.country} copyToClipboard={() => copyToClipboard(person.address.country)} />
            </div>
          </section>

          <div className='btn_wrapper'>
            <Button onClick={generateNewPerson}>Generate new person</Button>
            <Button 
              onClick={() => copyToClipboard(JSON.stringify(person))}
            >
              Copy JSON
            </Button>
          </div>
        </>
      )}
    </div>
  )
}

export default Person