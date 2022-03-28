import { LockIcon } from '@chakra-ui/icons';
import {
  Avatar,
  Box,
  Button,
  Center,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
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
                <InputGroup mt="15px" size="lg">
                  <Input
                    value={emailValue}
                    onChange={handleEmailChange}
                    required
                    type="email"
                    placeholder="email address"
                  />
                  <InputLeftElement>
                    <Icon viewBox="0 0 64 64" color="red.500">
                      <path
                        fill="#ced5dd"
                        d="M41.6,31c4.5-3.1,7.4-8.2,7.4-14c0-9.4-7.6-17-17-17S15,7.6,15,17c0,5.8,2.9,10.9,7.4,14C13.5,33.8,7,42.2,7,52v12h50V52
	C57,42.2,50.5,33.8,41.6,31z M19,17c0-7.2,5.8-13,13-13s13,5.8,13,13s-5.8,13-13,13S19,24.2,19,17z M53,60H11v-8c0-9.9,8.1-18,18-18
	h6c9.9,0,18,8.1,18,18V60z"
                      />
                    </Icon>
                  </InputLeftElement>
                </InputGroup>

                <InputGroup mt="15px" size="lg">
                  <Input
                    value={passwordValue}
                    onChange={handlePasswordChange}
                    required
                    type={show ? 'text' : 'password'}
                    placeholder="Password"
                  ></Input>
                  <InputLeftElement>
                    <LockIcon color={'#ced5dd'} />
                  </InputLeftElement>

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
