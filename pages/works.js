import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import pagerThumbnail from '../public/images/works/newpager.jpg'
import sunnysideupThumbnail from '../public/images/works/sunnysideup.jpg'
import giftThumbail from '../public/images/works/gift.jpg'
import foodTruckThumbnail from '../public/images/works/foodtruck.jpg'
import portfolioThumbnail from '../public/images/works/portfolio.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Deployed Works
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
            <WorkGridItem id="giftgenerator" title="AI Gift Generator" thumbnail={giftThumbail}>
              AI Gift Idea Generator w/ ChatGPT API
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="portfolio" title="Portfolio Calculator" thumbnail={portfolioThumbnail}>
              Portfolio Calculator for Stocks
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="foodtruck" title="SF Food Truck Maps" thumbnail={foodTruckThumbnail}>
              Finds Nearby Food Trucks in SF
            </WorkGridItem>
          </Section>
        </SimpleGrid>

        <Heading as="h3" fontSize={20} mb={4}>
          Other Works
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
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
