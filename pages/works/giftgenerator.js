import { Container, Badge, Link, List, ListItem }  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="AI Gift Generator">
      <Container>
        <Title>
          AI Gift Generator <Badge>2023</Badge>
        </Title>
        <P>
        Generates a list of gift ideas based on the user&lsquo;s input.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://www.giftgenerator.xyz/'>
              giftgenerator.xyz<ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>TypeScipt, NextJs, TailwindCSS, ChatGPT API</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work