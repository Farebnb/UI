import React, { ReactNode } from "react";
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Image,
  Input,
  Button,
  chakra,
  Container,
  Center,
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
import { IconType } from "react-icons";
import { ReactText } from "react";
import FareBnbT from "../assets/FareBnbT.png";
import houselogo from "../assets/pngwing.com.png";
import { AnyAction } from "redux";
import { useClickable } from "@chakra-ui/clickable";
import { useNavigate } from "react-router-dom";
import {
  falseListingView,
  setCastleType,
  setCottageType,
  setHomeType,
  setHotelType,
  toggleListingView,
} from "../Slices/ListingSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../Store";
import { ImHome } from "react-icons/im";
import { FaHotel } from "react-icons/fa";
// import { MdOutlineApartment, MdVilla } from "react-icons/md";
import { GiCastle, GiForestCamp } from "react-icons/gi";

// interface LinkItemProps {
//   name: string;
//   icon: IconType;

// }

// const LinkItems: Array<LinkItemProps> = [
//   { name: "Home", icon: FiHome, to: "trending" },
//   { name: "Trending", icon: FiTrendingUp },
//   { name: "Region", icon: FiMapPin },
//   { name: "Favourites", icon: FiStar },
//   { name: "Settings", icon: FiSettings },
// ];

export default function SidebarWithHeader({
  children,
}: {
  children: ReactNode;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent
        onClose={() => onClose}
        display={{ base: "none", md: "block" }}
      />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p="4">
        {children}
      </Box>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleHome = () => {
    navigate("/");
    dispatch(falseListingView());
  };

  const handleTrending = () => {
    navigate("/trending");
    dispatch(falseListingView());
  };

  const handleRegion = () => {
    navigate("/region");
  };

  const handleFavourites = () => {
    navigate("/favourites");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          <HStack>
            <Avatar size={"md"} src={houselogo} />
            <Image
              paddingLeft="1"
              boxSize="100px"
              objectFit="contain"
              src={FareBnbT}
            />
          </HStack>
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      <Link style={{ textDecoration: "none" }} onClick={handleHome}>
        <NavItem icon={FiHome}>Home</NavItem>
      </Link>
      <Link style={{ textDecoration: "none" }} onClick={handleTrending}>
        <NavItem icon={FiTrendingUp}>Trending</NavItem>
      </Link>
      <Link style={{ textDecoration: "none" }} onClick={handleRegion}>
        <NavItem icon={FiMapPin}>Region</NavItem>
      </Link>
      <Link style={{ textDecoration: "none" }} onClick={handleFavourites}>
        <NavItem icon={FiStar}>Favourites</NavItem>
      </Link>
      <Link style={{ textDecoration: "none" }} onClick={handleSettings}>
        <NavItem icon={FiSettings}>Settings</NavItem>
      </Link>

      {/* {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))} */}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

const NavItem2 = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "gray.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="0"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};

interface MobileProps extends FlexProps {
  onOpen: () => void;
}
const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  const dispatch: AppDispatch = useDispatch();

  const handleHouse = () => {
    dispatch(setHomeType());
  };

  const handleHotel = () => {
    dispatch(setHotelType());
  };

  const handleCastle = () => {
    dispatch(setCastleType());
  };

  const handleCottage = () => {
    dispatch(setCottageType());
  };

  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue("white", "gray.900")}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue("gray.200", "gray.700")}
      justifyContent={{ base: "space-between", md: "end" }}
      {...rest}
    >
      <Container maxW="lg">
        <HStack spacing={10}>
          <Link style={{ textDecoration: "none" }}>
            <NavItem2
              alignItems="center"
              direction="column"
              icon={ImHome}
              onClick={handleHouse}
            >
              Home
            </NavItem2>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <NavItem2 direction="column" icon={FaHotel} onClick={handleHotel}>
              Hotel
            </NavItem2>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <NavItem2 direction="column" icon={GiCastle} onClick={handleCastle}>
              Castle
            </NavItem2>
          </Link>
          <Link style={{ textDecoration: "none" }}>
            <NavItem2
              direction="column"
              icon={GiForestCamp}
              onClick={handleCottage}
            >
              Cottage
            </NavItem2>
          </Link>
        </HStack>
      </Container>

      <Flex alignItems={"flex-end"}>
        <Menu>
          <MenuButton
            py={2}
            transition="all 0.3s"
            _focus={{ boxShadow: "none" }}
          >
            <HStack>
              <Avatar
                size={"sm"}
                src={
                  "https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                }
              />
              <VStack
                display={{ base: "none", md: "flex" }}
                alignItems="flex-start"
                spacing="1px"
                ml="2"
              >
                <Text fontSize="sm">Justina Clark</Text>
                <Text fontSize="xs" color="gray.600">
                  Admin
                </Text>
              </VStack>
              <Box display={{ base: "none", md: "flex" }}>
                <FiChevronDown />
              </Box>
            </HStack>
          </MenuButton>
          <MenuList
            bg={useColorModeValue("white", "gray.900")}
            borderColor={useColorModeValue("gray.200", "gray.700")}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Billing</MenuItem>
            <MenuDivider />
            <MenuItem>Sign out</MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Flex>
  );
};
