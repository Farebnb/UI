import React, { ReactNode } from "react";
import {
  Box,
  CloseButton,
  Flex,
  Text,
  Image,
  Spacer,
  Button,
  chakra,
  Badge,
  Grid,
  Wrap,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
  FiSearch,
  FiMapPin,
} from "react-icons/fi";
import { MdStar, MdAccountCircle } from "react-icons/md";
import { IListing } from "../Interfaces/IListing";
import { AppDispatch, RootState } from "../Store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { ILocation } from "../Interfaces/ILocation";
import { getAllLocations, getLocationById } from "../Slices/LocationSlice";

export const ListingPage: React.FC<any> = (prop) => {
  const locationInfo = useSelector((state: RootState) => state.location);
  const dispatch: AppDispatch = useDispatch();
  const [location, setLocation] = useState<any>();
  const [check, setCheck] = useState<boolean>(true);

  useEffect(() => {
    //dispatch(getAllLocations());
    setLocation(locationInfo.location);
    console.log("1" + locationInfo.locationList);
    console.log("2" + location);
  }, [locationInfo]);

  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  const getLocationId = () => {
    if (check) {
      dispatch(getLocationById(prop.locationId));
      //dispatch(getAllLocations());
      //setLocation(locationInfo.location);
      setCheck(false);
      console.log("function1" + check);
      console.log("function2" + location);
      console.log("function3" + locationInfo.location);
    }
  };

  getLocationId();

  return (
    <>
      <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
        {prop.title}
      </Text>

      <Flex align="baseline" mt={2}>
        <Wrap>
          <Box as={MdStar} color="orange.400" />

          <Text ml={1} fontSize="sm">
            <b>{prop.rating}</b>
          </Text>
        </Wrap>
        <Text
          ml={2}
          textTransform="uppercase"
          fontSize="sm"
          fontWeight="bold"
          color="pink.800"
        >
          {prop.address}
        </Text>

        <Grid templateColumns="repeat(6, 1fr)" gap={1}>
          <Spacer />
          <Badge colorScheme="pink">{prop.type}</Badge>
          {prop.trending ? <Badge colorScheme="green">Trending</Badge> : <></>}
        </Grid>
      </Flex>
      <Image borderRadius="md" src={prop.image} />
      <div className="address">{prop.address}</div>
      <div className="location">
        {locationInfo.location?.city} {locationInfo.location?.zip}{" "}
        {locationInfo.location?.country}
      </div>

      <div className="price">{prop.price}</div>
      <div className="cap">{prop.cap}</div>
      <div className="rating">{prop.rating}</div>
      <div className="user">{prop.userId}</div>
      <div className="trending">{prop.trending}</div>
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setState([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={state}
      />
    </>
  );
};
