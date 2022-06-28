import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/button";

const ButtonPrimary = ({ route, url_site }) => {
  const handleTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <Link to={route}>
      <Button role="button" onClick={handleTop} mt={4} bg="brand.btn" color="brand.bg" _hover={{ bg: "#789b8b" }}>
        {url_site}
      </Button>
    </Link>
  );
};

export default ButtonPrimary;
