import React, {useState} from 'react';
import { Segment, Container, Header, Button, Icon } from 'semantic-ui-react';

export default function HomePage({history}) {
    const [name, setName] = useState("name")
    function fun(){
    throw new Error("eve error")
    }
    if(name === "name")
        fun()
    return (
        <Segment inverted textAlign='center' vertical className='masthead'>
            <Container>
                <Header as='h1' inverted>
                    E-When-T
                </Header>
                <Button onClick={() => history.push('/events')} size='huge' inverted>
                    Get started
                    <Icon name='right arrow' inverted />
                </Button>
            </Container>
        </Segment>
    )
}
