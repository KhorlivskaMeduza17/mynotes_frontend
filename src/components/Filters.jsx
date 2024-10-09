import { Input, Select } from "@chakra-ui/react";

export default function Filters(){
    return(
        <div className='flex flex-col gap-5'>
          <Input placeholder='Пошук'/>
          <Select>
            <option>Спочатку нові</option>
            <option>Спочатку старі</option>
          </Select>
        </div>
    )
}