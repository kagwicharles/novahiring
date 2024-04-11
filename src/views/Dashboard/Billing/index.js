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
  Spacer,
  Textarea
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
import React, { useState } from 'react';
import { dashboardTableData, timelineData } from 'variables/general'
// import ActiveUsers from "./components/ActiveUsers";
// import BuiltByDevelopers from "./components/BuiltByDevelopers";
// import MiniStatistics from "./components/MiniStatistics";
// import OrdersOverview from "./components/OrdersOverview";
// import Projects from "./components/Projects";
// import SalesOverview from "./components/SalesOverview";
// import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function Billing() {
  const iconBoxInside = useColorModeValue('white', 'white')
  const textColor = useColorModeValue('gray.700', 'white')
  const [inputFields, setInputFields] = useState([{ value: '' }]);

  const handleChangeInput = (index, event) => {
    const values = [...inputFields];
    values[index].value = event.target.value;
    setInputFields(values);
  };

  const handleAddInput = () => {
    setInputFields([...inputFields, { value: '' }]);
  };

  const handleRemoveInput = index => {
    const values = [...inputFields];
    if (values.length > 1) {
      values.splice(index, 1);
      setInputFields(values);
    }

  };


  return (
    <Flex flexDirection='column' pt={{ base: '120px', md: '75px' }}>



      <Grid
        height='200px'
        templateColumns={{ sm: '1fr', md: '1fr 1fr', lg: '2fr 1fr' }}
        templateRows={{ sm: '1fr auto', md: '1fr', lg: '1fr' }}
        gap='24px'
      >

        <OrderedList spacing={10} fontWeight='bold' fontSize='2xl'>
          <Divider border='2px' />
          <Text fontSize='4xl'>Job Title</Text>
          <Box mb={2} />
          <Flex
            width='50%'>
            <Input placeholder="Add position title" size='lg' />
          </Flex>

          <Text fontSize='4xl'>Job Description</Text>
          <Box mb={2} />
          <Flex
            width='50%'>
            <Textarea placeholder="Add position description" size='lg' />
          </Flex>
          <Text fontSize='4xl'>Questions</Text>

          {inputFields.map((inputField, index) => (
            <ListItem key={index} style={{ listStyleType: "none" }}>
              <Flex
                width='100%'
                justifyContent='space-between'
                padding='5px'
              // align="center"
              >
                <Flex
                  direction='column'
                  width='100%'
                  ml='10px'
                  justifyContent='space-between'
                >
                  <Input placeholder={`Question ${index + 1}`} size='lg' />
                </Flex>
                <Flex ml='10px'
                >
                  <Button onClick={() => handleRemoveInput(index)} colorScheme='red'>Delete</Button>
                </Flex>

              </Flex>
            </ListItem>
          ))}

          <Button onClick={handleAddInput}>ADD A QUESTION</Button>
          <Divider border='2px' />
          <Button colorScheme='blue'>Submit</Button>

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
