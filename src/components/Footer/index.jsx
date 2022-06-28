import React from "react";
import { Stack, Box, Text, StackDivider } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <Text textAlign="center" fontSize=".9rem" p={3} bg="brand.footerbg" color="brand.bg">
        Desenvolvido por{" "}
        <Box
          as="a"
          fontWeight={500}
          _hover={{ borderBottom: "1px solid", borderColor: "brand.btn" }}
          href="https://github.com/kevilin"
          target="_blank"
          rel="noreferrer noopener"
        >
          Kevilin Rodrigues
        </Box>
      </Text>
    </>
  );
};

export default Footer;
