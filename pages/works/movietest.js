import { Container, Badge, Link, List, ListItem }  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Movie Personality Test">
      <Container>
        <Title>
          Movie Personality Test<Badge>2023</Badge>
        </Title>
        <P>
          Receive Movie Recommendations Based on your Personality!
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.moviepersonalitytest.com/'>
              moviepersonalitytest.com <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, NextJs, TailwindCSS, OpenAI_API, TMBD_API </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work