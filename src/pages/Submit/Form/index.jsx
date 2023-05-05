import React, { useState } from "react";
import { Stack, Box, InputGroup, InputLeftAddon, Input, FormControl, FormLabel, Textarea, Text, Icon, Button, Image, HStack } from "@chakra-ui/react";
import { VStack, Spinner } from "@chakra-ui/react";
import { MdCloudUpload } from "react-icons/md";
import InputComp from "../../../components/Input";
import { HandleClick } from "./Form.logical";
import { nanoid } from "nanoid";
import Confetti from "../../../components/Confetti";
import { Navigate } from "react-router-dom";

const Form = () => {
  const [uploadStatus, setUploadStatus] = useState(false);
  const { handleSubmit, handleChange, onFileChange, url_imagem, toSubmit, redirect } = HandleClick();
  //Read inputs of fyle
  const handleChanges = (e) => {
    if (e.target.files.length === 0) {
      return null;
    }
    onFileChange(e);
    setUploadStatus(true);
    setTimeout(() => {
      setUploadStatus(false);
    }, 4000);
  };

  return (
    <Stack as="form" w="100%" p={{ md: "7", base: "0" }} spacing={6} onSubmit={handleSubmit}>
      <Stack direction={{ base: "column", md: "row" }}>
        <InputComp nameprop="projeto" label="Projeto" type="text" place="" value={handleChange} />
      </Stack>
      <InputComp nameprop="url_site" label="URL do site" type="text" place="https://kmr.dev.br/" value={handleChange} />
      <InputComp nameprop="url_github" label="Github" type="text" place="https://github.com/" value={handleChange} />
      <Box>
        <Text fontWeight="500">Imagem para thumbnail</Text>
        <FormLabel textAlign="center" borderWidth=".1rem" borderColor="brand.btn" borderRadius="md" borderStyle="dashed" p={12} cursor="pointer">
          <Icon as={MdCloudUpload} fontSize="5rem" textAlign="center" cursor="pointer" transition=".3s" _hover={{ color: "brand.btn" }} />
          <Input
            type="file"
            disabled={uploadStatus ? true : null}
            nameprop="file"
            accept="image/png, image/jpeg"
            border="none"
            display="none"
            name="pictures"
            onChange={handleChanges}
          />
          <Text>Selecione um arquivo (jpeg, jpg, png)</Text>
        </FormLabel>
        <Box>
          <HStack justifyContent="center">
            {uploadStatus ? (
              <Spinner />
            ) : (
              url_imagem.map((data) => (
                <VStack p={3} key={nanoid()}>
                  <Text>{data.imageData}</Text>
                  <Box w="70px" h="80px" overflow="hidden">
                    <Image loading="lazy" src={data.url_imagem} borderRadius="md" objectFit="cover" w="100%" />
                  </Box>
                </VStack>
              ))
            )}
          </HStack>
          <Text textAlign="center" as="p" fontSize=".9rem">
            Imagens anexadas: {url_imagem.length} / 3
          </Text>
          <FormLabel>
          <InputComp nameprop="tecnologias" label="Tecnologias utilizadas" type="text" place="" value={handleChange} />
        </FormLabel>
        </Box>
      </Box>
      {toSubmit ? <Confetti /> : null}
      <Button role="button" disabled={uploadStatus && true} type="submit" mt={4} p={2} w="100%" bg="brand.btn" color="brand.bg" _hover={{ bg: "#789b8b" }}>
        {toSubmit ? (
          <>
            <HStack alignItems={"center"}>
              <Text as="p" fontSize={{ base: ".9rem", md: "1rem" }}>
                Feito!
                <span role="img" aria-labelledby="emoji-hearth">
                  🤗
                </span>{" "}
                Redirecionando...
              </Text>
              <Spinner />
            </HStack>
          </>
        ) : (
          "Publicar!"
        )}
      </Button>
      {redirect && (
        <Box>
          <Navigate to="/" />
        </Box>
      )}
    </Stack>
  );
};

export default Form;
