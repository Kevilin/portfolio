import React from "react";
import { useEffect } from "react";
import { Stack, Text, Grid, Box, Spinner, Center} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { GetData } from "../Home/Hosts/Host.logical";
import Cards from "../../components/Cards";

const Posts = () => {
  const { getDataFirebase, data } = GetData();

  useEffect(() => {
    getDataFirebase();
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Stack bg="#2E2E2E" >
      <Box minHeight="100vh" mb={20}>
        <Box bg="#6fbbd3" p={10} mb={10}>
          <Text as="h1" fontSize={{ base: "1.5rem", md: "2.5rem" }} color="brand.text" textAlign="center" fontWeight="700" lineHeight="0.5">
            Portfólio 💻
          </Text>
        </Box>
        <Stack direction="row" flexWrap="wrap" p={2} justifyContent="center" m={8}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(2, 1fr)",
            }}
            gap={8}
          >
            {data.map((post) => {
              return <Cards key={nanoid()} post={post} width="100%" />;
            })}
          </Grid>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Posts;

