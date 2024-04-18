import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Spacer,
  HStack,
  useDisclosure,
  IconButton,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaShoppingCart } from "react-icons/fa";
import UserLogo from "./UserLogo";
import Logo from "../Assets/Logo.png";

const Navbar = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productImage, setProductImage] = useState(null);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleProductPriceChange = (e) => {
    setProductPrice(e.target.value);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setProductImage(file);
  };

  const handleSubmit = () => {
    // Handle form submission logic here, e.g., send data to backend API
    console.log("Product Name:", productName);
    console.log("Product Price:", productPrice);
    console.log("Product Image:", productImage);
    // Reset form fields after submission
    setProductName("");
    setProductPrice("");
    setProductImage(null);
  };

  return (
    <Box position="fixed" top={0} left={0} right={0} zIndex={999} px={0} py={0}>
      <Flex alignItems="center" py={4} px={8} bg="orange.200">
        <Box>
          <img
            src={Logo}
            alt="Website Logo"
            style={{ width: "100px", height: "auto", marginRight: "10px" }}
          />
        </Box>
        <Spacer />
        <Box
          display={{ base: "none", md: "block" }}
          width="40%"
          bg={"white"}
          _hover={{ boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" }}
        >
          <Input placeholder="Search" />
        </Box>
        <Spacer />
        <Box
          display={{ base: "none", md: "block" }}
          width={{ base: "30%", md: "auto" }}
        >
          <HStack spacing={8} justify="space-between" fontSize="xl">
            <Menu>
              <MenuButton
                as={Box}
                px={4}
                py={2}
                transition="all 0.2s"
                borderRadius="md"
                borderWidth="1px"
                _hover={{ bg: "gray.100" }}
              >
                Shop by Categories
              </MenuButton>
              <MenuList>
                <MenuItem as={Link} to="/products">
                  Vegetables
                </MenuItem>
                <MenuItem as={Link} to="/products">
                  Fruits
                </MenuItem>
                <MenuItem as={Link} to="/products">
                  Dairy
                </MenuItem>
                <MenuItem as={Link} to="/products">
                  Bakery
                </MenuItem>
              </MenuList>
            </Menu>
            <HStack spacing={8}>
              <Box as={Link} to="/" style={{ border: '1px solid transparent', borderRadius: '4px', padding: '5px', transition: 'all 0.3s' }} _hover={{ borderColor: 'blue.500', backgroundColor: 'blue.50' }}>
                Home
              </Box>
              <Box as={Link} to="/addToCart" fontSize="2xl">
                <Box
                  style={{ border: '1px solid transparent', borderRadius: '4px', padding: '5px', transition: 'all 0.3s' }}
                  _hover={{ borderColor: 'blue.500', backgroundColor: 'blue.50' }}
                >
                  <FaShoppingCart size={30} />
                </Box>
              </Box>
              <Box as={Link} to="/signin" style={{ border: '1px solid transparent', borderRadius: '4px', padding: '5px', transition: 'all 0.3s' }} _hover={{ borderColor: 'blue.500', backgroundColor: 'blue.50' }}>
                Admin
              </Box>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  onClick={onToggle}
                >
                  Add Product
                </MenuButton>
                {isOpen && (
                  <MenuList>
                    <Input placeholder="Product Name" value={productName} onChange={handleProductNameChange} />
                    <Input placeholder="Product Price" value={productPrice} onChange={handleProductPriceChange} />
                    <Input type="file" accept="image/*" onChange={handleImageUpload} />
                    <Button onClick={handleSubmit}>Submit</Button>
                  </MenuList>
                )}
              </Menu>
              <Box style={{ border: '1px solid transparent', borderRadius: '4px', padding: '5px', transition: 'all 0.3s', }} _hover={{ borderColor: 'blue.500', backgroundColor: 'blue.50' }}>
                <UserLogo />
              </Box>
            </HStack>
          </HStack>
        </Box>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            icon={
              isOpen ? <CloseIcon boxSize={8} /> : <HamburgerIcon boxSize={8} />
            }
            variant="ghost"
            onClick={onToggle}
          />
        </Box>
      </Flex>
      {isOpen && (
        <Box
          bg="gray.100"
          position={{
            base: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 100,
          }}
          overflowY="auto"
        >
          <Flex height="100%" alignItems="center" flexDirection="column">
            <HStack spacing={4} flexWrap="wrap" fontSize="xl">
              <Box as={Link} to="/" style={{ border: '1px solid transparent', borderRadius: '4px', padding: '5px', transition: 'all 0.3s' }} _hover={{ borderColor: 'blue.500', backgroundColor: 'blue.50' }}>
                Home
              </Box>
              <Box as={Link} to="/addToCart" fontSize="2xl">
                <Box
                  style={{ border: '1px solid transparent', borderRadius: '4px', padding: '5px', transition: 'all 0.3s' }}
                  _hover={{ borderColor: 'blue.500', backgroundColor: 'blue.50' }}
                >
                  <FaShoppingCart size={30} />
                </Box>
              </Box>
              <Box as={Link} to="/signin" style={{ border: '1px solid transparent', borderRadius: '4px', padding: '5px', transition: 'all 0.3s' }} _hover={{ borderColor: 'blue.500', backgroundColor: 'blue.50' }}>
                Admin
              </Box>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="ghost"
                  onClick={onToggle}
                >
                  Add Product
                </MenuButton>
                {isOpen && (
                  <MenuList>
                    <Input placeholder="Product Name" value={productName} onChange={handleProductNameChange} />
                    <Input placeholder="Product Price" value={productPrice} onChange={handleProductPriceChange} />
                    <Input type="file" accept="image/*" onChange={handleImageUpload} />
                    <Button onClick={handleSubmit}>Submit</Button>
                  </MenuList>
                )}
              </Menu>
              <Box style={{ border: '1px solid transparent', borderRadius: '4px', padding: '5px', transition: 'all 0.3s', }} _hover={{ borderColor: 'blue.500', backgroundColor: 'blue.50' }}>
                <UserLogo />
              </Box>
            </HStack>
          </Flex>
        </Box>
      )}
    </Box>
  );
};

export default Navbar;