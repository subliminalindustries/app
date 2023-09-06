import { useState } from 'react';
import { Button } from '@chakra-ui/react'
import { InputGroup, InputElement, InputLeftElement, Spacer, Center, Flex, Input, Textarea, Box, VStack, Stack, Skeleton, SkeletonCircle, SkeletonText } from '@chakra-ui/react'

const Ask = () => {
  let [value, setValue] = useState('');
  let [text, setText] = useState('');

  const updateText = async (current, question, answer) => {
    let prelude = current.length === 0 ? '' : '...';
    setText(`${current}${prelude}\n\nQuestion: ${question}\n\n...\n\nAnswer:\n\n${answer}\n\n`)
  }

  const handleInputChange = async (e) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  }

  const updateValue = async (v) => {
      await updateText(text, value, 'I have not been trained yet, so I cannot answer any questions. Check up on me later to see if I am functional.')
      setValue('')
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      updateValue()
    }
  }

  return (
    <Stack>

      <Skeleton
	height='70vh'
        fadeDuration={1}
	isLoaded
      >
	<Stack height='100%'>
        <Box
          bg='green.500'
          color='white'
	  padding='10px'
	  textAlign='center'
	  height='10vh'
	>
	Interact with the AI below to get answers.
	</Box>
	<Spacer />
        <Textarea isReadOnly value={text} variant='filled' minHeight='100%' />
	<Spacer />
        <Flex>
	  <Box>
	    <InputGroup>
              <InputLeftElement
                pointerEvents='none'
                color='gray.300'
                fontSize='1.2em'
                children='>'
              />
	      <Input width='70vw' placeholder='...' value={value} onChange={handleInputChange} onKeyPress={handleKeyPress}/>
	    </InputGroup>
	  </Box>
          <Spacer />
          <Box>
            <Button width='20vw' onClick={updateValue}>Send</Button>
          </Box>
        </Flex>
	</Stack>
      </Skeleton>

    </Stack>
  )
}

export default Ask;
