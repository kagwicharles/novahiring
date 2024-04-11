// Chakra imports
import {
  Avatar,
  AvatarGroup,
  Box,
  Button,
  Center,
  Flex,
  Image,
  Text,
  useColorModeValue,
  AspectRatioBox,
  Heading,
} from '@chakra-ui/react'
import imageVid from '../assets/img/imageVid.png'
import React from 'react'
import hireImage from '../assets/img/hire.svg'

const Video = () => {
  // Chakra color mode

  return (
    <>
      <Heading as='h3' fontSize='25px' pos='absolute' color='white' pl='6px'>
        Frontend Developer Position :
      </Heading>
      <Center
        margin='-8px'
        backgroundColor='#1F384C'
        height='calc(100vh)'
        //   mt='-20px'
        //   //   width='110%'
        //   ml='-20px'
        //   mr='-20px'
        display='flex'
        flexDirection='column'
      >
        <Box
          width='1121px'
          height='180px'
          pl='20px'
          bgColor='white'
          // bgColor='gray.100' // Adjust background color as needed
          borderRadius='lg'
          boxShadow='md' // Add subtle shadow
        >
          <Text as='h3' mb={2} fontSize='25px'>
            INTERVIEW. Part 1:
          </Text>
          <Text fontSize='25px'>
            Question 6: Why would you like to work in our company?
          </Text>
          {/* <Flex mt={4} justifyContent='flex-end'> */}
          <Text fontSize='25px' color='gray.500'>
            You have 40 seconds. Next question will appear instantly.
          </Text>
          {/* </Flex> */}
        </Box>
        <Image
          // display='block'
          //   placeItems='center'
          // marginLeft='auto'
          // marginRight='auto'
          //   justifyContent='center'

          src={imageVid}
          width='60%'
          // marginBottom='7%'
          // height='800px'
          //   objectFit='cover'
        />
      </Center>
      <Image
        pos='fixed'
        bottom='15px'
        src={hireImage}
        width='40px'
        pl='6px'
        // alt="Dan Abramov"
      />
    </>
  )
}

export default Video
