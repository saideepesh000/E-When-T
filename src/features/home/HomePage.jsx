import React from 'react';
import { Segment, Container, Header, Button, Icon } from 'semantic-ui-react';

export default function HomePage({history}) {
    const name = "name"
    function fun(){
    window.newrelic.noticeError("name errorr")
    }
    if(name === "name"){
        fun()
    }
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
