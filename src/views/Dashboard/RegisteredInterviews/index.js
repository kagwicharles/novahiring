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
  StackDivider,
  Link,
} from '@chakra-ui/react'
import { FaPlus } from 'react-icons/fa'
import { MdOutlineVideoCall, MdCheckCircle, MdSettings } from 'react-icons/md'
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
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from 'components/Icons/Icons.js'
import React from 'react'
import { ChakraProvider } from '@chakra-ui/provider'
import theme from 'theme/theme'
import { dashboardTableData, timelineData } from 'variables/general'
// import ActiveUsers from "./components/ActiveUsers";
// import BuiltByDevelopers from "./components/BuiltByDevelopers";
// import MiniStatistics from "./components/MiniStatistics";
// import OrdersOverview from "./components/OrdersOverview";
// import Projects from "./components/Projects";
// import SalesOverview from "./components/SalesOverview";
// import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function RegisteredInterviews() {
  const iconBoxInside = useColorModeValue('white', 'white')
  const textColor = useColorModeValue('gray.700', 'white')

  return (
    <Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>
      <Flex justifyContent='space-between' width='1000px' pb='20px'>
        <Heading size='lg' color='gray.400' pt='4px'>
          Frontend Developer positions
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

      <Grid
        height='200px'
        templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }}
        templateRows={{ sm: '1fr auto', md: '1fr', lg: '1fr' }}
        gap='24px'
      >
        <OrderedList spacing={10} fontWeight='bold' fontSize='2xl'>
          <ListItem>
            <Card width='1000px'>
              <CardHeader>
                <Heading size='md'>Lindsey stroud</Heading>
                <Text pt='2' pl='24' fontSize='sm'>
                  6 years of experience in similar jobs. Computer science degree
                </Text>
              </CardHeader>

              <CardBody height='50px'>
                <Flex>
                  <Text color='blue.500' pt='2' pr='2' fontSize='sm'>
                    See CV
                  </Text>
                  <Text color='blue.500' pt='2' pr='2' fontSize='sm'>
                    See Linkedin
                  </Text>
                  <Text color='blue.500' pt='2' pr='2' fontSize='sm'>
                    Contact
                  </Text>
                  <Link
                    color='blue.500'
                    pt='2'
                    pl='36px'
                    fontSize='sm'
                    href='/#/video'
                  >
                    See more details or whatch the interview
                  </Link>
                  <Text pt='2' pl='96' fontSize='md'>
                    Score:
                  </Text>
                  <Text color='blue.500' pt='2' pl='2' fontSize='md'>
                    95
                  </Text>
                  <HStack pos='absolute' mt='35px'>
                    <Text fontSize='md'>Score:</Text>
                    <Text fontSize='md' color='#00FF38'>
                      95
                    </Text>
                  </HStack>
                </Flex>
              </CardBody>
            </Card>
          </ListItem>
          <ListItem>
            <Card width='1000px'>
              <CardHeader>
                <Heading size='md'>Scott</Heading>
                <Text pt='2' pl='185px' fontSize='sm'>
                  6 years of experience in similar jobs. Computer science degree
                </Text>
              </CardHeader>

              <CardBody height='50px'>
                <Flex>
                  <Text color='blue.500' pt='2' pr='2' fontSize='sm'>
                    See CV
                  </Text>
                  <Text color='blue.500' pt='2' pr='2' fontSize='sm'>
                    See Linkedin
                  </Text>
                  <Text color='blue.500' pt='2' pr='2' fontSize='sm'>
                    Contact
                  </Text>
                  <Link color='blue.500' pt='2' pl='36px' fontSize='sm'>
                    See more details or whatch the interview
                  </Link>

                  <Text pt='2' pl='96' fontSize='md'>
                    Score:
                  </Text>
                  <Text color='blue.500' pt='2' pl='2' fontSize='md'>
                    83
                  </Text>
                  <HStack pos='absolute' mt='35px'>
                    <Text fontSize='md'>Score:</Text>
                    <Text fontSize='md' color='#00FF38'>
                      83
                    </Text>
                  </HStack>
                </Flex>
              </CardBody>
            </Card>
          </ListItem>
          <ListItem>
            <Card width='1000px'>
              <CardHeader>
                <Heading size='md'>Amy</Heading>
                <Text pt='2' pl='192px' fontSize='sm'>
                  6 years of experience in similar jobs. Computer science degree
                </Text>
              </CardHeader>

              <CardBody height='50px'>
                <Flex>
                  <Text color='blue.500' pt='2' pr='2' fontSize='sm'>
                    See CV
                  </Text>
                  <Text color='blue.500' pt='2' pr='2' fontSize='sm'>
                    See Linkedin
                  </Text>
                  <Text color='blue.500' pt='2' pr='2' fontSize='sm'>
                    Contact
                  </Text>
                  <Link color='blue.500' pt='2' pl='36px' fontSize='sm'>
                    See more details or whatch the interview
                  </Link>
                  <Text pt='2' pl='96' fontSize='md'>
                    Score:
                  </Text>
                  <Text color='blue.500' pt='2' pl='2' fontSize='md'>
                    76
                  </Text>
                  <HStack pos='absolute' mt='35px'>
                    <Text fontSize='md'>Score:</Text>
                    <Text fontSize='md' color='#00FF38'>
                      76
                    </Text>
                  </HStack>
                </Flex>
              </CardBody>
            </Card>
          </ListItem>
        </OrderedList>

        {/* <Projects
            title={"Projects"}
            amount={30}
            captions={["Companies", "Members", "Budget", "Completion"]}
            data={dashboardTableData}
          />
          <OrdersOverview
            title={"Orders Overview"}
            amount={30}
            data={timelineData}
          /> */}
      </Grid>
    </Flex>
  )
}
