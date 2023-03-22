import React from "react";
import { Box, Divider, HStack, Text, Icon, Image, Button } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BiGitRepoForked, BiCodeAlt } from "react-icons/bi";
import { VscGithub } from "react-icons/vsc";


const MotionBox = motion(Box);

const Cards = ({ post }) => {
  const { projeto, url_site, url_github, tecnologias, url_imagem } = post.data().inputs;

  return (
    <MotionBox initial={{ opacity: 0 }} animate={{ opacity: 1, y: -10 }}>
      <Box maxW="sm" borderRadius="xl" w={{ base: "100%", md: "23rem" }} p={4} bg="brand.bg" overflow="hidden" minH="25rem" minW="42rem" boxShadow="xl">

        <Box maxW="xl" minW="40rem" overflow="hidden" rounded="20px" maxHeight="20rem">
          <Image
            src={url_imagem.length === 0 ? null : url_imagem[0].url_imagem}
            alt={url_imagem.length === 0 ? null : url_imagem[0].imageData}
            borderRadius="sm"
            loading="lazy"
            h="30vh"
            w="100%"
            objectFit="cover"
            style={{ scale: "1", transition: "0.5s ease-in-out" }}
            _hover={{ transform: "scale(1.1)" }}
            rounded="10px"
          />
        </Box>
        <Text m=".5rem 0" as="h4" fontSize="xl" fontWeight="600" w="20rem">
          Projeto: {projeto}
        </Text>
        <HStack color="gray" fontSize="sm">
          <span role="img">
            <VscGithub fontSize="1.2rem"/>
          </span>
          <a href={`${url_github}`} target="_blank">Repositório</a>
        </HStack>
        <Divider mt={2} borderColor="gray" m=".5rem 0" />
        <HStack as="span" fontSize="sm">
          {tecnologias === "" ? null : (
            <HStack>
              <Icon as={BiCodeAlt} color="gray" fontSize="1.2rem" /> <Text>Tecnologias: {tecnologias}</Text>
            </HStack>
          )}
        </HStack>

          <a href={`${url_site}`} target="_blank">
          <Button role="button" w="100%" mt={4} bg="brand.btn" onClick={() => window.scrollTo({ top: 0 })} color="brand.bg" _hover={{ bg: "#789b8b" }}>
            Acessar
          </Button>
          </a>

      </Box>
    </MotionBox>
  );
};

export default Cards;
