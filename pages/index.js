import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello, I&apos;m a full-stack developer based in California!
        </Box>
        <Box display={{ md: 'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Andrew Heim
            </Heading>
            <p>Digital Creator ( Developer / Videographer )</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{base: 4, md: 0}}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              src="/images/andrew-face2.jpg"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            What&lsquo;s Good! I&apos;m a recent Hack Reactor Graduate.
            I&apos;m currently working @ Galvanize as a Software Engineering Immersive Resident!
            I&#39;m currently based in California.
            <br/><br/>
            I&#39;m currently looking for a Software Engineering job!
          </Paragraph>
          <Box align="center" my={4}>
            <Link href="/works" >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </Link>
          </Box>
        </Section>
        {/*<Section delay={0.4}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>January 1996</BioYear>
            Born in California.
          </BioSection>
          <BioSection>
            <BioYear>January 2023</BioYear>
            Complete Hack Reactor&#39;s 12-Week SWE Bootcamp
          </BioSection>
          <BioSection>
            <BioYear>January 2023 - Present</BioYear>
            Lead Software Engineering Immersive Resident
          </BioSection>
          <BioSection>
            <BioYear>Present</BioYear>
            In search of a software engineering job. Send Help.
          </BioSection>
  </Section> */}
        <Section delay={0.6}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Rollerblading, Juggling, Slacklining, Board Games, Reading, Soccer, Tennis, Climbing, Science
          </Paragraph>
        </Section>

        <Section delay={0.8}>
          <Heading as="h3" variant="section-title">
            On the Web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/andepants" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>@andepants</Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/andrew-heim/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>@andrew-heim</Button>
              </Link>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page