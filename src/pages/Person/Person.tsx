import { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useToast } from "@/hooks/use-toast"
import './Person.scss';

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

const Person = () => {
  const [person, setPerson] = useState<PersonInterface>({
    name: '',
    email: '',
    phoneNumber: '',
    gender: '',
    birthdate: new Date(),
    address: {
      street: '',
      number: '',
      zipcode: '',
      country: '',
      city: '',
      state: ''
    }
  });

  const { toast } = useToast()
  
  const generateFullPerson = (): void => {
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
    setPerson(person)
  }

  useEffect(() => {
    generateFullPerson()
  }, [])

  const copyToClipboard = (value: string): void =>{
    navigator.clipboard.writeText(value)
    toast({
      title: "Text copied to clipboard",
    })
  }

  return (
    <div className='person_container'>
      <section className='person-data_container'>
        <h2>Personal Info</h2>
        <div className='input_container'>
          Name:
          <div>
            <Input data-testid="person-name" disabled type="text" value={person.name} />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                <span 
                  onClick={() => copyToClipboard(person.name)} 
                  className="material-symbols-outlined"
                >
                  content_paste
                </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className='input_container'>
          Email Address:
          <div>
            <Input disabled type="email" value={person.email} />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span 
                    onClick={() => copyToClipboard(person.email)} className="material-symbols-outlined"
                  >
                    content_paste
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className='input_container'>
          Phone number:
          <div>
            <Input disabled type="text" value={person.phoneNumber} />
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span 
                    onClick={() => copyToClipboard(person.phoneNumber)} className="material-symbols-outlined"
                  >
                    content_paste
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div className='input_wrapper'>
          <div className='input_container'>
            Birthdate:
            <div>
              <Input disabled type="text" value={person.birthdate.toLocaleDateString()} />
              <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span 
                    onClick={() => copyToClipboard(person.birthdate.toLocaleDateString())} 
                    className="material-symbols-outlined"
                  >
                    content_paste
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </div>
          </div>
          <div className='input_container'>
            Phone number:
            <div>
              <Input disabled type="text" value={person.phoneNumber} />
              <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span 
                    onClick={() => copyToClipboard(person.phoneNumber)} className="material-symbols-outlined"
                  >
                    content_paste
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Copy to clipboard</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            </div>
          </div>
        </div>

        <span className='divider'></span>

        <h2>Address</h2>
        <div className='input_wrapper'>
          <div className='input_container'>
            Street:
            <div>
              <Input disabled type="text" value={person.address.street} />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span 
                      onClick={() => copyToClipboard(person.address.street)} className="material-symbols-outlined"
                    >
                      content_paste
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className='input_container'>
            Number:
            <div>
              <Input disabled type="text" value={person.address.number} />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span 
                      onClick={() => copyToClipboard(person.address.number)} className="material-symbols-outlined"
                    >
                      content_paste
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className='input_wrapper'>
          <div className='input_container'>
            City:
            <div>
              <Input disabled type="text" value={person.address.city} />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span 
                      onClick={() => copyToClipboard(person.address.city)} className="material-symbols-outlined"
                    >
                      content_paste
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className='input_container'>
            Zipcode:
            <div>
              <Input disabled type="text" value={person.address.zipcode} />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span 
                      onClick={() => copyToClipboard(person.address.zipcode)} className="material-symbols-outlined"
                    >
                      content_paste
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
        <div className='input_wrapper'>
          <div className='input_container'>
            State:
            <div>
              <Input disabled type="text" value={person.address.state} />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span 
                      onClick={() => copyToClipboard(person.address.state)} className="material-symbols-outlined"
                    >
                      content_paste
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className='input_container'>
            Country:
            <div>
              <Input disabled type="text" value={person.address.country} />
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <span 
                      onClick={() => copyToClipboard(person.address.country)} className="material-symbols-outlined"
                    >
                      content_paste
                    </span>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Copy to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </section>
      <div className='btn_wrapper'>
        <Button onClick={generateFullPerson}>Generate new person</Button>
        <Button 
          onClick={() => copyToClipboard(JSON.stringify(person))}
        >
          Copy JSON
        </Button>
        
      </div>
    </div>
  )
}

export default Person