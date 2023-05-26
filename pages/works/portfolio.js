import { Container, Badge, Link, List, ListItem }  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Portfolio Calculator">
      <Container>
        <Title>
          Portfolio Calculator<Badge>2023</Badge>
        </Title>
        <P>
          A portfolio calculator for stocks.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://portfolio-calculator-v2.vercel.app/'>
              https://portfolio-calculator-v2.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, NextJs, TailwindCSS, MarketStackAPI, Recharts </span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work