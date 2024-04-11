// Chakra imports
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
} from "@chakra-ui/react";
import CardHeader from "components/Card/CardHeader";
import { AddIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";

import DonutChart from "components/Charts/DonutChart";
import LineChart from "components/Charts/LineChart";
import Card from "components/Card/Card";

import React from "react";

import SalesOverview from "./components/SalesOverview";
import { Link, To } from "react-router-dom/cjs/react-router-dom";

export default function Dashboard() {
  const textColor = useColorModeValue("gray.700", "white");
  // const router =

  return (
    <Flex flexDirection="column" pt={{ base: "120px", md: "75px" }}>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
      >
        <Card mb={{ sm: "26px", lg: "0px" }} p="4">
          <CardHeader mb="20px" pl="22px">
            <Flex direction="row" width="100%" justifyContent="space-between">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                OPEN POSITIONS
              </Text>
              <Button
                size="sm"
                pl={6}
                pr={6}
                color="grey"
                as={Link}
                to={`/admin/open-positions`}
              >
                OPEN A NEW POSITION
              </Button>
            </Flex>
          </CardHeader>
          <Progress value={80} colorScheme="blue" />
          <Stack spacing="6">
            <Box
              borderRadius={10}
              border="1px solid"
              borderColor="gray.100"
              p={4}
              mt={4}
              height="-moz-max-content"
            >
              <Text fontWeight="bold">FRONTEND DEVELOPER</Text>
              <VStack spacing={4} alignItems="start">
                <HStack mt={2} spacing={6}>
                  <Text fontSize="md" fontWeight="normal">
                    Date published
                  </Text>
                  <Text fontSize="md" fontWeight="medium" color="gray.400">
                    December 23, 2023
                  </Text>
                </HStack>

                <HStack justifyContent="space-between" w="full">
                  <HStack>
                    <Avatar
                      name="Dan Abrahmov"
                      src="https://bit.ly/dan-abramov"
                    />
                    <Text>Lindsey stroud</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <HStack spacing={2}>
                      <DeleteIcon boxSize={4} color="gray.200" />
                      <EditIcon boxSize={4} color="gray.200" />
                      <DeleteIcon boxSize={4} color="gray.200" />
                      <AddIcon boxSize={4} color="gray.200" />
                    </HStack>
                    <HStack>
                      {" "}
                      <Button
                        as={Link}
                        size="sm"
                        pl={6}
                        pr={6}
                        color="white"
                        bgColor="blue.300"
                        to={`/admin/registered-interviews`}
                      >
                        3 interview registered{" "}
                      </Button>
                    </HStack>
                  </HStack>
                </HStack>
              </VStack>
            </Box>
          </Stack>
        </Card>
        <SalesOverview
          title={"Interviews Done"}
          percentage={5}
          chart={<LineChart />}
        />
      </Grid>
      <Grid
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap="24px"
        mb={{ lg: "26px" }}
        style={{ direction: "rtl" }}
      >
        <Card b={{ sm: "26px", lg: "0px" }} p="4">
          <CardHeader mb="20px" pl="22px">
            <Flex direction="column" alignSelf="flex-start">
              <Text fontSize="lg" color={textColor} fontWeight="bold" mb="6px">
                Profile Match
              </Text>
            </Flex>
          </CardHeader>
          <Box w="100%" h={{ sm: "300px" }} ps="8px">
            <DonutChart />
          </Box>
        </Card>
      </Grid>
    </Flex>
  );
}
