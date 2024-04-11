import {
  Flex,
  Grid,
  Image,
  SimpleGrid,
  useColorModeValue,
  Stack,
  Box,
  Text,
  Progress,
  Heading,
  HStack,
  // CardBody,
  VStack,
  Icon,
  Button,
  Avatar,
  List,
  ListItem,
  OrderedList,
  Divider,
  ListIcon,
  Input,
  AspectRatio,
} from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { MdOutlineVideoCall, MdCheckCircle, MdSettings } from 'react-icons/md'
import { GoPlay } from 'react-icons/go'
import CardHeader from 'components/Card/CardHeader'
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5'
import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import CardBody from 'components/Card/CardBody'
// assets
import peopleImage from 'assets/img/people-image.png'
import logoChakra from 'assets/svg/logo-white.svg'
import BarChart from 'components/Charts/BarChart'
import DonutChart from 'components/Charts/DonutChart'
import LineChart from 'components/Charts/LineChart'
import Card from 'components/Card/Card'
import meetImage from '../../../assets/img/meet.png'
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from 'components/Icons/Icons.js'
import React from 'react'
import { dashboardTableData, timelineData } from 'variables/general'

export default function Applicants() {
  const iconBoxInside = useColorModeValue('white', 'white')
  const textColor = useColorModeValue('gray.700', 'white')

  return (
    <Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>
      <Flex justifyContent='space-between' width='1000px'>
        <Heading size='lg' pb='8' color='gray.400'>
          Frontend Developer positions
          <br />
          Lindsey stroud
        </Heading>
        <HStack>
          <Text fontWeight='500' color='black' fontSize='35px'>
            Average Score:
          </Text>
          <Text fontWeight='500' color='#00FF38' fontSize='35px'>
            87
          </Text>
        </HStack>
      </Flex>
      <Flex>
        <Text fontSize='15px' color='#8B8B8B' fontWeight='500'>
          26 years old <br />
          martinsmith@outlook.com
          <br /> +34 63768827
        </Text>
        <Text pl='50px' fontSize='15px' color='#8B8B8B' fontWeight='500'>
          Linkedin Profile <br />
          Cv
        </Text>
      </Flex>
      <Grid
        height='200px'
        mt='5'
        templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }}
        templateRows={{ sm: '1fr auto', md: '1fr', lg: '1fr' }}
        gap='24px'
      >
        <OrderedList spacing={10} fontWeight='bold' fontSize='2xl'>
          <Divider border='2px' />
          <ListItem width='1000px'>
            <Card bgColor='#C2CFE0' borderRadius='5px' mb='10px'>
              <CardHeader justifyContent='center'>
                <Heading size='lg' color='white' fontWeight='bold'>
                  Answers prefrences in the questions
                </Heading>
              </CardHeader>
            </Card>
            <Flex width='100%' justifyContent='space-between' padding='5px'>
              <Box position='relative' mr='20px'>
                <Image width='250px' borderRadius='10px' src={meetImage} />
                <Icon
                  position='absolute'
                  top='50%'
                  left='50%'
                  transform='translate(-50%, -50%)'
                  as={GoPlay}
                  fontSize='50px'
                  color='white'
                  opacity='0.8'
                />
              </Box>
              <Card borderRadius='5px'>
                <Flex justifyContent='space-between'>
                  <VStack alignItems='baseline'>
                    <Text color='#B5B5B5' fontSize='xl' fontWeight='bold'>
                      1 min Pitch about yourself
                    </Text>
                    <Text color='#B5B5B5' fontSize='lg' fontWeight='bold'>
                      I’m Martín, 26 years old. I studied Computer science and I
                      have......
                    </Text>
                  </VStack>
                  <HStack>
                    <Text fontSize='md'>Score:</Text>
                    <Text fontSize='md' color='#00FF38'>
                      95
                    </Text>
                  </HStack>
                </Flex>
              </Card>
            </Flex>
          </ListItem>
          <Divider border='2px' />
          <ListItem width='1000px'>
            <Card bgColor='#C2CFE0' borderRadius='5px' mb='10px'>
              <CardHeader justifyContent='center'>
                <Heading size='lg' color='white' fontWeight='bold'>
                  Answers in the questions
                </Heading>
              </CardHeader>
            </Card>
            <Flex width='100%' justifyContent='space-between' padding='5px'>
              <Box position='relative' mr='20px'>
                <Image width='250px' borderRadius='10px' src={meetImage} />
                <Icon
                  position='absolute'
                  top='50%'
                  left='50%'
                  transform='translate(-50%, -50%)'
                  as={GoPlay}
                  fontSize='50px'
                  color='white'
                  opacity='0.8'
                />
              </Box>
              <Card borderRadius='5px'>
                <Flex justifyContent='space-between'>
                  <VStack alignItems='baseline'>
                    <Text color='#B5B5B5' fontSize='xl' fontWeight='bold'>
                      1 min Pitch about yourself
                    </Text>
                    <Text color='#B5B5B5' fontSize='lg' fontWeight='bold'>
                      Years of experience In total 7 years of experience, <br />
                      first I started in X company as Y
                    </Text>
                  </VStack>
                  <HStack>
                    <Text fontSize='md'>Score:</Text>
                    <Text fontSize='md' color='#00FF38'>
                      64
                    </Text>
                  </HStack>
                </Flex>
              </Card>
            </Flex>
          </ListItem>
          <Divider />
          <ListItem width='1000px'>
            <Card bgColor='#C2CFE0' borderRadius='5px' mb='10px'>
              <CardHeader justifyContent='center'>
                <Heading size='lg' color='white' fontWeight='bold'>
                  Answers prefrences in the questions
                </Heading>
              </CardHeader>
            </Card>
            <Flex width='100%' justifyContent='space-between' padding='5px'>
              <Box position='relative' mr='20px'>
                <Image width='250px' borderRadius='10px' src={meetImage} />
                <Icon
                  position='absolute'
                  top='50%'
                  left='50%'
                  transform='translate(-50%, -50%)'
                  as={GoPlay}
                  fontSize='50px'
                  color='white'
                  opacity='0.8'
                />
              </Box>
              <Card borderRadius='5px'>
                <Text color='#B5B5B5' fontSize='xl' fontWeight='bold'>
                  1. Years of experience
                </Text>
                <Text color='#B5B5B5' fontSize='lg' fontWeight='bold'>
                  I’m Martín, 26 years old. I studied Computer science and I
                  have......
                </Text>
              </Card>
            </Flex>
          </ListItem>
        </OrderedList>
      </Grid>
    </Flex>
  )
}
