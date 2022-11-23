import { useDispatch, useSelector } from "react-redux";
import { IListing } from "../Interfaces/IListing";
import { AppDispatch, RootState } from "../Store";

import * as React from "react";
import { Box, Center, Image, Flex, Badge, Text, propNames, HStack, Stack } from "@chakra-ui/react";
import { MdStar, MdAccountCircle } from "react-icons/md";
import { GridItem } from "@chakra-ui/react";



export const ListingCard: React.FC<any> = (prop: IListing) => {

   




    return(
<>


     
      <Box p="1" maxW="430px" borderWidth="1px">
        <Image borderRadius="md" src= {prop.image} />
        <Flex align="baseline" mt={2}>
          <Badge colorScheme="pink">{prop.type}</Badge>
          {prop.trending?  <Badge colorScheme="green">Trending</Badge> : <></> }          
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
        <Box as={MdAccountCircle} color="gray.400" />
          <Text ml={1} fontSize="sm">
            <b>Max Guests {prop.cap}</b> 
          </Text>
          </Flex>
          <Flex mt={2} align="center">
          <Box as={MdStar} color="orange.400" />
          <Text ml={1} fontSize="sm">
            <b>{prop.rating}</b> 
          </Text>
       
        </Flex>
      </Box>
  
     
    

</>
    )


}