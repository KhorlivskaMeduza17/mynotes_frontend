import { Button, Input, Textarea } from "@chakra-ui/react";

export default function CreateNoteForm() {
    return (
      <form className=' w-full flex flex-col gap-3'>
            <h3 className='font-bold text-xl'>Створення нотатки</h3>
            <Input placeholder="Назва"/>
            <Textarea placeholder="Опис"/>
            <Button colorScheme='pink'>Створити</Button>
      </form>
    )
  }
  