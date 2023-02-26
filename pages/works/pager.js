import { Container, Badge, Link, List, ListItem }  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="PAGER">
      <Container>
        <Title>
          PAGER <Badge>2023</Badge>
        </Title>
        <P>
        Full Stack social media networking app for Ravers to create groups, swipe, join, and chat.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://github.com/BO-Phoenix/PAGER'>
              https://github.com/BO-Phoenix/PAGER <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>IOS/Android</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React Native, Redux, JavaScript, Firebase</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work