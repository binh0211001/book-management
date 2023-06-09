import { Button, Flex, Box, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  console.log('navbar');
  return (
    <Flex
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      width="100%"
      as="nav"
      p={4}
      mx="auto"
      maxWidth="1150px"
    >
      <Box>
        {/* click vao chuyen den trang chu */}
        <Link to="/">
          <Button
            fontWeight={['medium', 'medium', 'medium']}
            fontSize={['xs', 'sm', 'lg', 'xl']}
            variant="ghost"
            _hover={{ bg: 'rgba(0,0,0,.2)' }}
            padding="1"
            color="white"
            letterSpacing="0.65px"
          >
            <Text fontSize={['xl', '2xl', '2xl', '2xl']} mr={2}>
              🦉
            </Text>
            Library App
          </Button>
        </Link>
      </Box>

      <Box>
        {/* click vao cung chuyen den trang chu */}
        <Link to="/">
          <Button
            fontWeight={['medium', 'medium', 'medium']}
            fontSize={['xs', 'sm', 'lg', 'xl']}
            variant="ghost"
            _hover={{ bg: 'rgba(0,0,0,.2)' }}
            p={[1, 4]}
            color="white"
          >
            List Books
          </Button>
        </Link>
        {/* chuyen den page addbook */}
        <Link to="/add-new-book">
          <Button
            fontWeight={['medium', 'medium', 'medium']}
            fontSize={['xs', 'sm', 'lg', 'xl']}
            variant="ghost"
            _hover={{ bg: 'rgba(0,0,0,.2)' }}
            p={[1, 4]}
            color="white"
          >
            Add Book
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
