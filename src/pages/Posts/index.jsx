import React from "react";
import { useEffect } from "react";
import { Stack, Text, Grid, Box, Spinner, Center} from "@chakra-ui/react";
import { nanoid } from "nanoid";
//Data desde Host
import { GetData } from "../Home/Hosts/Host.logical";
import Cards from "../../components/Cards";

const Posts = () => {
  const { getDataFirebase, data } = GetData();
  //Call data to Firebase
  useEffect(() => {
    getDataFirebase();
    window.scrollTo({ top: 0 });
    //eslint-disable-next-line
  }, []);
  return (
    <Stack bg="#2E2E2E" >
      <Box minHeight="100vh" mb={20}>
        <Box bg="#6fbbd3" p={10} mb={10}>
          <Text as="h1" fontSize={{ base: "1.5rem", md: "2.5rem" }} color="brand.text" textAlign="center" fontWeight="700" lineHeight="1.2">
            Portfólio 💻
          </Text>
        </Box>
        {/* Filtrar */}
        <Stack direction="row" flexWrap="wrap" justifyContent="center">
          <Grid templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(2, 1fr)", xl: "repeat(2, 1fr)" }} gap={16}>
            {data.length === 0 ? (
              <Center w="100%">
                <Spinner size="xl" color="brand.btn" m="0 auto" />
              </Center>
            ) : (
              data.map((post) => {
                return <Cards key={nanoid()} post={post} />;
              })
            )}
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Posts;
