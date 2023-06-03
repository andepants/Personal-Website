import { Container, Badge, Link, List, ListItem }  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="PAGER">
      <Container>
        <Title>
          Sunny Side Up <Badge>2022</Badge>
        </Title>
        <P>
          E-Commerce Clothing Website Sunny Side Up
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://github.com/Vector-Software-Engineering/sunny-side-up'>
               github.com/Vector-Software-Engineering/sunny-side-up <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>React, NodeJS, Styled Components, JavaScript, Webpack, AWS EC2</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work