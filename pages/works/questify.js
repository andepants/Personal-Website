import { Container, Badge, Link, List, ListItem }  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Questify AI">
      <Container>
        <Title>
          Questify AI <Badge>2023</Badge>
        </Title>
        <P>
        Questify is a text-based choose your own adventure game that uses the Hume and GPT-4 API to offer players an immersive and limitless gaming experience.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.questify.life/'>
              questify.life <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, NextJS, OpenAI API, Hume API, TailwindCSS</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work