import Logo from './logo'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button.js'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')
  const textColor = useColorModeValue('white', 'black')
  const colorModeValue = useColorModeValue('#6B46C1', '#FBD28D');
  const bg = active ? colorModeValue : undefined;
  const text = active ? textColor : inactiveColor;
  return (
    <Link href={href}
      p={2}
      bg={bg}
      color={text}>
      {children}
    </Link>
  )
}

const Navbar = props => {
  const { path } = props
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{backdropFilter:'blur(10px'}}
      zIndex={1}
      {...props}
     >
      <Container display="flex" p={2} maxW="container.md" wrap="wrap" align="center" justify="space-between">
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{base: 'column', md: 'row'}}
          display={{base: 'none', md: 'flex'}}
          width={{base: 'full', md: 'auto'}}
          align="center"
          flexGrow={1}
          mt={{ base: 4, nmd:0 }}
        >
          <LinkItem href="/works" path={path}>
            Projects
          </LinkItem>
          {/*<LinkItem href="/posts" path={path}>
            Posts
          </LinkItem> */}
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />
          <Box ml={2} display={{base: 'inline-block', md:'none'}}>
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon/>}  variant="outline" aria-label="Options" />
              <MenuList>
                <MenuItem as={Link} href="/">About</MenuItem>
                <MenuItem as={Link} href="/works">Projects</MenuItem>
                {/*<MenuItem as={Link} href="/Posts">Posts</MenuItem>*/}
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
