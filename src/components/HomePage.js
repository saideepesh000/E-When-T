import { Segment, Container, Header, Image, Button,Icon } from 'semantic-ui-react';

const HomePage = ({history}) => {
	return(
	<Segment textAlign="center" vertical className="masthead">
		<Container>
			<Header as="h1">
				<Image size="massive" src={`/media/logo.png`} style={{marginBottom: 12}}/>
				MiVents
			</Header>
			<Button onClick={() => history.push('/events')} size="huge">
				Get Started
				<Icon name="right arrow" />
			</Button>
		</Container>
		
	</Segment>	
	
	)
}

export default HomePage;