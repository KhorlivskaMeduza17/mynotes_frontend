import { section } from 'framer-motion/client'
import { Button, Input, Textarea } from "@chakra-ui/react";
import './App.css'

function App() {
  return (
    <section>
      <div>
        <form>
          <h3>Створення нотатки</h3>
          <Input placeholder="Назва"/>
          <Textarea placeholder="Опис"/>
          <Button>Створити</Button>
        </form>
      </div>
    </section>
  )
}

export default App
