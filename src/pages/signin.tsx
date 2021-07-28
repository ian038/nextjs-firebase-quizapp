import React from 'react'
import { Button, Center, Container, Heading, VStack } from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc'
import Navbar from '../common/Navbar'
import { useRouter } from 'next/router';
import { useAuth } from '../firebase/auth';

const Signin = () => {
    const { auth, signinWithGoogle } = useAuth()
    const router = useRouter()

    if(auth) {
        router.push((router.query.next as string) || '/')
    }

    return (
        <>
            <Navbar />
            <Container>
                <Center mt={10}>
                    <VStack spacing="4">
                        <Heading fontSize='3xl' mb={2}>
                            Hello, Welcome to my Quiz App!
                        </Heading>
                        <Button leftIcon={<FcGoogle />} onClick={() => signinWithGoogle()}>
                            Sign In with Google
                        </Button>
                    </VStack>
                </Center>
            </Container>
        </>
    )
}

export default Signin 