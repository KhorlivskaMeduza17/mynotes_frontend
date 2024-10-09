import { Card, CardBody, CardFooter, CardHeader, Divider, Heading, Text } from '@chakra-ui/react';

export default function Note(){
    return (
        <Card variant={'filled'}>
            <CardHeader>
                <Heading size={'md'}>Нотатка</Heading>
            </CardHeader>
            <Divider borderColor={'gray'}/>
            <CardBody>
                <Text>Опис нотатки</Text>
            </CardBody>
            <Divider borderColor={'gray'}/>
            <CardFooter>Дата створення</CardFooter>
        </Card>
    )
}