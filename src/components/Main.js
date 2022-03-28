import { CheckIcon } from '@chakra-ui/icons';
import { Circle, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Main = () => {
  return (
    <div>
      <Flex alignItems={'center'} flexDirection={'column'}>
        <Circle mt="200px" pos="relative" size={'120px'} bg="#e3f9ec">
          <CheckIcon
            right={-26}
            top={0}
            bottom={0}
            mt="auto"
            pos={'absolute'}
            color={'#45965c'}
            w={140}
            h={140}
          />
        </Circle>
        <Text color={'#45965c'} fontSize="6xl" mt="25px" textAlign={'center'}>
          <b>You've made it!</b>
        </Text>
      </Flex>
    </div>
  );
};

export default Main;
