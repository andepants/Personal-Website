import { Container, Badge, Link, List, ListItem }  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="SF Food Truck Map">
      <Container>
        <Title>
          SF Food Truck Map<Badge>2023</Badge>
        </Title>
        <P>
          Finds nearby food trucks in SF.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://food-truck-map-mocha.vercel.app/'>
              https://food-truck-map-mocha.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>TypeScipt, NextJs, TailwindCSS + DaisyUI, GoogleMapsAPI</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work