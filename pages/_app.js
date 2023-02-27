import { ChakraProvider } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import Layout from '../components/layouts/main'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'
import AnimatedCursor from '../components/AnimatedCursor'
import { isMobile } from 'react-device-detect';


const Website = ({ Component, pageProps, router }) => {

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Layout router={router}>
        <AnimatePresence mode='wait' initial={true}>
          <Component {...pageProps} key={router.route} />
          {!isMobile && isMounted ? <AnimatedCursor /> : null}
        </AnimatePresence>
      </Layout>
    </ChakraProvider>
  )
}

export default Website