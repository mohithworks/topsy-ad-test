import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex justifyContent={'center'} mb={10} alignItems={'center'}>
        <Text fontSize={'xl'} fontWeight={'bold'}>TOPSY</Text>
    </Flex>
  )
}

export default Header