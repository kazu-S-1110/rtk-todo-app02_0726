import { Box, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <>
      <Box bg="#fcf6f5" w="60vw" h="8vh" alignItems="center" display="flex">
        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          Redux Toolkit Todo App
        </Text>
      </Box>
    </>
  );
};
export default Header;
