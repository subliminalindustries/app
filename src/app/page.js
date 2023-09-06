'use client'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Wiki from './pages/wiki.js'
import Ask from './pages/ask.js'

const Page = ({ pageProps }) => {
  return (
    <Tabs>
      <TabList>
        <Tab>Ask</Tab>
        <Tab>Wiki</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
	  <Ask pageProps={...pageProps}/>
        </TabPanel>
        <TabPanel>
          <Wiki pageProps={...pageProps}/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  )
};

export default Page;
