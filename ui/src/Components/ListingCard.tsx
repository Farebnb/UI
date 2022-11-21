import { useDispatch, useSelector } from "react-redux";
import { IListing } from "../Interfaces/IListing";
import { AppDispatch, RootState } from "../Store";

import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text, propNames } from "@chakra-ui/react";
import { MdStar, MdAccountCircle } from "react-icons/md";



export const ListingCard: React.FC<any> = (prop: IListing) => {

   




    return(
<>
<Center h="100vh">
      <Box p="5" maxW="320px" borderWidth="1px">
        <Image borderRadius="md" src= {prop.image} />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">{prop.type}</Badge>
          <Text
            ml={2}
            textTransform="uppercase"
            fontSize="sm"
            fontWeight="bold"
            color="pink.800"
          >
            {prop.address}
          </Text>
        </Flex>
        <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
          {prop.title}
        </Text>
        <Text mt={2}>${prop.price}/night</Text>
        <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>{prop.rating}</b> 
          </Text>
          <Box as={MdAccountCircle} color="gray.400" />
          <Text ml={1} fontSize="sm">
            <b>Max Guests {prop.cap}</b> 
          </Text>
        </Flex>
      </Box>
    </Center>
</>
    )


}