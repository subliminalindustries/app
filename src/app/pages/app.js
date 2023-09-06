import { ChakraProvider } from '@chakra-ui/react'
import { Rubik } from 'next/font/google';
import theme from '../theme.js';

const rubik = Rubik({ subsets: ['latin'] });

const App = ({ Component, pageProps }) => {
  <>
    <style jsx global>
      {`
        :root {
          --font-rubik: ${rubik.style.fontFamily};
        }
      `}
    </style>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  </>
};

export default App;
