import { Container, Badge, Link, List, ListItem }  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="2-Player Memory Game">
      <Container>
        <Title>
          2-Player Memory Game<Badge>2023</Badge>
        </Title>
        <P>
          A 2-player memory game matching cards with the same image. The player with the most matches wins.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://two-player-memory-game.web.app/'>
              two-player-memory-game.web.app <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>TypeScript, Angular, SASS</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work