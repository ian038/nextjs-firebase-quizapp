import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app'
import { AuthProvider } from '../firebase/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  )
}

export default MyApp
