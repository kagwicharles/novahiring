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
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
import { MdOutlineVideoCall, MdCheckCircle, MdSettings } from "react-icons/md";
import CardHeader from "components/Card/CardHeader";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import CardBody from "components/Card/CardBody";
// assets
import peopleImage from "assets/img/people-image.png";
import logoChakra from "assets/svg/logo-white.svg";
import BarChart from "components/Charts/BarChart";
import DonutChart from "components/Charts/DonutChart";
import LineChart from "components/Charts/LineChart";
import Card from "components/Card/Card";
// Custom icons
import {
  CartIcon,
  DocumentIcon,
  GlobeIcon,
  WalletIcon,
} from "components/Icons/Icons.js";
import React from "react";
import { ChakraProvider } from "@chakra-ui/provider";
import theme from "theme/theme";
import { dashboardTableData, timelineData } from "variables/general";
// import ActiveUsers from "./components/ActiveUsers";
// import BuiltByDevelopers from "./components/BuiltByDevelopers";
// import MiniStatistics from "./components/MiniStatistics";
// import OrdersOverview from "./components/OrdersOverview";
// import Projects from "./components/Projects";
// import SalesOverview from "./components/SalesOverview";
// import WorkWithTheRockets from "./components/WorkWithTheRockets";

export default function QnA() {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Heading size="lg" pb="8" color="gray.600">
        Backend developer position <br /> How is your ideal candidate?
      </Heading>
      <Grid
        height="200px"
        templateColumns={{ sm: "1fr", md: "1fr 1fr", lg: "2fr 1fr" }}
        templateRows={{ sm: "1fr auto", md: "1fr", lg: "1fr" }}
        gap="24px"
      >
        <OrderedList spacing={10} fontWeight="bold" fontSize="2xl">
          <Divider border="3px" />
          <ListItem>
            <Card width="1000px" bgColor="#C2CFE0" borderRadius="5px">
              <CardHeader justifyContent="center">
                <Heading size="lg" color="white" fontWeight="bold">
                  Answers prefrences in the questions
                </Heading>
              </CardHeader>
            </Card>
            <Card width="1000px" borderRadius="5px" mt="4">
              <CardBody>
                <Text
                  pt="2"
                  pr="2"
                  color="#B5B5B5"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  We are looking for someone with at least X years of experience
                  <br />I want someone who could come to the office at least X
                  times per week in Barcelona
                  <br />I want someone preferbely with a X degree
                </Text>
              </CardBody>
            </Card>
          </ListItem>
          <Divider border="3px" />
          <ListItem>
            <Card width="1000px" bgColor="#C2CFE0" borderRadius="5px">
              <CardHeader justifyContent="center">
                <Heading size="lg" color="white" fontWeight="bold">
                  Answers prefrences in the questions
                </Heading>
              </CardHeader>
            </Card>
            <Card width="1000px" borderRadius="5px" mt="4">
              <CardBody>
                <Text
                  pt="2"
                  pr="2"
                  color="#B5B5B5"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  We are looking for someone with at least X years of experience
                  <br />I want someone who could come to the office at least X
                  times per week in Barcelona
                  <br />I want someone preferbely with a X degree
                </Text>
              </CardBody>
            </Card>
          </ListItem>
          <Divider border="3px" />
          <ListItem>
            <Card width="1000px" bgColor="#C2CFE0" borderRadius="5px">
              <CardHeader justifyContent="center">
                <Heading size="lg" color="white" fontWeight="bold">
                  Answers requierements in the roleplay
                </Heading>
              </CardHeader>
            </Card>
            <Card width="1000px" borderRadius="5px" mt="4">
              <CardBody>
                <Text
                  pt="2"
                  pr="2"
                  color="#B5B5B5"
                  fontSize="lg"
                  fontWeight="bold"
                >
                  I want the candidate to first explain X process to the client.
                  <br />I want the candidate to first ask X question to the
                  client.
                  <br />I want the candidate to offer this solution to the
                  client.
                </Text>
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
  );
}
