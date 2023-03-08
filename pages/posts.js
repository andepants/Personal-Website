import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbRickRoll from '../public/images/contents/thumbRickRoll.jpeg'
import thumbLeetCode from '../public/images/contents/leetcode.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Popular Posts
      </Heading>
      <Section delay={0.1}>
        <SimpleGrid columns={[1,2,2]} gap={6}>
          <GridItem
            title="Grind75 LeetCode JS Walkthroughs"
            thumbnail={thumbLeetCode}
            href="https://www.youtube.com/watch?v=O5rSCFf_RFc&list=PLWuV5qp8PRGhUt46CvFVgOenjRlqMaolF&index=1&ab_channel=AndrewHeim-Dev"
          />
          <GridItem
            title="Rick Roll"
            thumbnail={thumbRickRoll}
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Posts