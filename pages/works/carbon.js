import { Container, Badge, Link, List, ListItem }  from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Carbon Footprint Calculator">
      <Container>
        <Title>
          Carbon Footprint Calculator<Badge>2023</Badge>
        </Title>
        <P>
          Calculate your carbon footprint and learn how to reduce it.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href='https://carbon-footprint-calculator-sigma.vercel.app/'>
              https://carbon-footprint-calculator-sigma.vercel.app/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Platform</Meta>
            <span>Website</span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>JavaScript, NextJs, TailwindCSS, React-ChartJS-2</span>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work