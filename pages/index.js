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
  Icon,
  UnorderedList
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
// import { BioSection, BioYear } from '../components/bio'
import {
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')} p={3} mb={6} align="center">
          Hello, I&apos;m a full-stack developer based in Denver!
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
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            What&lsquo;s Good!
            My name is Andrew and I&lsquo;m excited to share a bit about myself and my journey as a software engineer. Currently based in Denver, Colorado.
            <br/><br/>
            I&lsquo;m also currently working on an exciting project: an AI Gift Idea Generator This lets users type in interests/hobbies and it generates a list of gift ideas based on the user&lsquo;s input.
            <br/><br/>
            If you&lsquo;re looking for a passionate and skilled software engineer to join your team, I&lsquo;d love to connect and learn more about your goals and vision. Let&lsquo;s build something amazing together!
          </Paragraph>
          <Box align="center" my={4}>
            <Link href="/works" >
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal" bg={useColorModeValue('#6B46C1', '#FBD28D')}>
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
        </Section>*/}
        <Section delay={0.2}>
          <Heading>
            Technical Skills
          </Heading>
          <UnorderedList>
            <ListItem><u>Front-End:</u> JavaScript, TypeScript, ReactJS, React Native, NextJS, Svelte, SvelteKit, HTML5, CSS3, Styled Components, TailwindCSS, ChakraUI, Three.JS</ListItem>
            <ListItem><u>Back-End:</u> Node.js, Express, MongoDB, MySQL, RESTful API, Firebase: Firestore, Hosting, Authentication</ListItem>
            <ListItem><u>Testing/Deployment:</u> Jest, Mocha, Chai, Vercel, AWS: EC2, Artillery, Loader.io</ListItem>
          </UnorderedList>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>
            Rollerblading, Juggling, Slacklining, Board Games, Reading, Soccer, Tennis, Skiing, Calisthenics, Climbing, Science
          </Paragraph>
        </Section>
        <Section delay={0.4}>
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