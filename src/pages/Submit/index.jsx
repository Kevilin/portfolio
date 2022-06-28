import React, { useEffect } from "react";
import { Box, Stack, Text, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Form from "../Submit/Form";

const MotionBox = motion(Box);

const Submit = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    //eslint-disable-next-line
  }, []);
  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -20 }}>
      <Stack textAlign="center" p={6} mt="4rem">
        <Text as="span" fontSize="1.6rem">Basta preencher o formulário para publicar.</Text>
      </Stack>
      <Stack direction="row" mt={6} justifyContent="center">
        <Box w="80%" borderRadius="md">
          <Form />
        </Box>
      </Stack>
    </MotionBox>
  );
};

export default Submit;
