import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import pagerThumbnail from '../public/images/works/newpager.jpg'
import sunnysideupThumbnail from '../public/images/works/sunnysideup.jpg'
import giftThumbail from '../public/images/works/gift.jpg'
import foodTruckThumbnail from '../public/images/works/foodtruck.jpg'
import portfolioThumbnail from '../public/images/works/portfolio.jpg'
import movieTestThumbnail from '../public/images/works/movietest.jpg'
import carbonThumbnail from '../public/images/works/carbon.jpg'
import memoryGameThumbnail from '../public/images/works/memorygame.jpg'
import questifyThumbnail from '../public/images/works/questify.jpg'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Deployed Works
        </Heading>

        <SimpleGrid columns={[1,1,2]} gap={6}>
          <Section>
            <WorkGridItem id="questify" title="Questify AI" thumbnail={questifyThumbnail}>
              A Choose Your Own Adventure Game w/ GPT-4 API
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="memorygame" title="2-Player Memory Game" thumbnail={memoryGameThumbnail}>
              A Matching Card Game
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="giftgenerator" title="AI Gift Generator" thumbnail={giftThumbail}>
              AI Gift Idea Generator w/ ChatGPT API
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="carbon" title="Carbon Footprint Calculator" thumbnail={carbonThumbnail}>
              Calculates Your Carbon Footprint
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="movietest" title="Movie Personality Test" thumbnail={movieTestThumbnail}>
              Recommends Movies Based on Personality
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem id="portfolio" title="Portfolio Calculator" thumbnail={portfolioThumbnail}>
              Calculates your Stock Portfolio Value
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
