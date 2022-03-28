import {
  Avatar,
  Box,
  Button,
  Center,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Form = ({ onLogin }) => {
  const [show, setShow] = React.useState(false);
  const [emailValue, setEmailValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');

  const handleEmailChange = (event) => setEmailValue(event.target.value);
  const handlePasswordChange = (event) => setPasswordValue(event.target.value);
  const handleClick = () => setShow(!show);

  return (
    <div className="form__container">
      <Avatar bg="teal.500" src="https://bit.ly/broken-link" />

      <Text color={'#6aacad'} fontSize="6xl">
        <b>Welcome</b>
      </Text>

      <form
        onSubmit={(e) => {
          onLogin(e, emailValue, passwordValue);
        }}
        className="form"
      >
        <Center>
          <Box w={'65%'} maxW={'1000px'} minHeight="240px" bg="#fdfdfd">
            <Center>
              <Box w={'90%'}>
                <Input
                  value={emailValue}
                  onChange={handleEmailChange}
                  mt="15px"
                  required
                  type="email"
                  size="lg"
                  placeholder="email address"
                />

                <InputGroup mt="15px" size="lg">
                  <Input
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    required
                    type={show ? 'text' : 'password'}
                    placeholder="Password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button h="1.75rem" size="sm" onClick={handleClick}>
                      {show ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>

                <Text mt="5px" className="form__reset">
                  forgot password?
                </Text>

                <Button
                  type="submit"
                  mt="15px"
                  w={'100%'}
                  colorScheme="teal"
                  size="lg"
                >
                  Login
                </Button>
              </Box>
            </Center>
          </Box>
        </Center>
      </form>
      <Text mt="10px">
        New to us?{' '}
        <a className="form__sign" href="#">
          Sign Up
        </a>
      </Text>
    </div>
  );
};

export default Form;
