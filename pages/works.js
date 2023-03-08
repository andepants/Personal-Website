import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import pagerThumbnail from '../public/images/works/newpager.jpg'
import sunnysideupThumbnail from '../public/images/works/sunnysideup.jpg'
import workinprogressThumbnail from '../public/images/works/workinprogress.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
            <WorkGridItem id="pager" title="PAGER" thumbnail={pagerThumbnail}>
              A Social Media App for Ravers.
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="sunnysideup" title="Sunny Side Up" thumbnail={sunnysideupThumbnail}>
              E-Commerce Clothing Website
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="youtubebookmarker" title="Youtube Bookmarker" thumbnail={workinprogressThumbnail}>
              Chrome Extension to Bookmark Timestamps in Youtube Videos
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
