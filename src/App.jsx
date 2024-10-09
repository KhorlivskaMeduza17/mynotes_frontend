import CreateNoteForm from './components/CreateNoteForm';
import Note from './components/Note';
import { Card, CardBody, CardFooter, CardHeader, Divider, Heading, Select, Text, Input } from '@chakra-ui/react';
import Filters from './components/Filters';
import { useEffect } from 'react';
import { fetchNotes } from './services/notes';
import React, { useState } from 'react';


function App() {
  const [notes, setNotes] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      let notes = await fetchNotes();

      setNotes(notes);
  }

  fetchData();
}, [])

  return (
    <section className='p-8 flex flex-row justify-start items-start gap-12'>
      <div className='flex flex-col w-1/3 gap-10'>
        <CreateNoteForm/>
        <Filters/>
      </div>

      <ul className='flex flex-col gap-5 w-1/2'>
        {notes.map((n) => (
          <li key={n.id}>
          <Note 
            title={n.title} 
            description={n.description} 
            createdAt={n.createdAt}
          />
          </li>
        ))}
      </ul>
    </section>
  )
}

export default App
