import React from "react";
import { Box, Divider, Flex, Heading, Link } from "@chakra-ui/layout";
import { useRouter } from "next/router";
import { useAuth } from '../firebase/auth'

const Navbar: React.FC<{}> = () => {
    const { auth, signOut } = useAuth()
    const router = useRouter();

    return (
        <>
            <Flex justify='space-between' m={4}>
                <Heading onClick={() => router.push('/')} as='button'>
                    Quiz App
                </Heading>
                <Box>
                    {auth ? (
                        <Box p={2}>
                            <Link
                            p={2}
                            onClick={() => router.push('/quiz/new')}
                            fontWeight={ router.pathname === '/quiz/new' ? 'extrabold' : 'normal' }
                            >   
                            Add New Quiz
                            </Link>
                            <Link p={2} onClick={() => signOut()}>
                                Logout
                            </Link>
                        </Box>
                    ) : (
                        <Box p={2}>
                            <Link
                            p={2}
                            onClick={() => router.push('/signin')}
                            fontWeight={ router.pathname === '/signin' ? 'extrabold' : 'normal' }
                            >   
                            Sign In
                            </Link>
                        </Box>
                    )}
                </Box>
            </Flex>
            <Divider
            css={{
                boxShadow: '1px 1px #888888'
            }}
            />
        </>
    )
}

export default Navbar