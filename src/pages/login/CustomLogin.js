import QMInput from '../../components/QMInput'
import React from 'react'
import {  
    Flex,
    Form,
    FormControl,
    FormLabel,
    Heading,   
    Stack,
    Image,
    Box, Text, Button, Icon, Link, useToast } from "@chakra-ui/react";
    import { Link as RouterLink } from "react-router-dom";
    import * as yup from "yup";
    import { Formik } from "formik";
    import { isRequired } from '../../services/validations'
function CustomLogin() {
   
    const toast = useToast();
    const loginClick = ({ username, password }) => {
        const payload = {
            username: username,
            password: password
        };
        // LoginService(payload)
        //     .then(() => {
        //         if (history.location.search) {
        //             const query = querystring.parse(history.location.search.replace("?", ""));
        //             if (query.session_expired == "" && query.redirect != "") {
        //                 return history.push(query.redirect);
        //             }
        //         }
        //          history.push("/dashboard");
        //     })
        //     .catch(showErrorToaster);
    };

  
  return (
    <div>
      <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
            <Stack spacing={4} w={'full'} maxW={'md'}>
                <Heading fontSize={'2xl'}>Sign in to your account</Heading>
                <Formik
                        enableReinitialize
                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        validateOnChange={false}
                        validateOnBlur={false}
                        onSubmit={(values, { setSubmitting }) => {
                            setSubmitting(false);
                            return loginClick(values);
                        }}
                        validationSchema={
                            yup.object().shape({
                                username: isRequired("Email"),
                                password: isRequired("Password")
                            })
                        }
                    
                >
                     {(formik) => (
                    <form onSubmit={formik.handleSubmit}>
                        <FormControl id="username">
                            <FormLabel>Username</FormLabel>
                            <QMInput h="56px" placeholder="Username" name="username" />
                            {/* <ErrorMessage name="username" /> */}
                        </FormControl>
                        <FormControl id="password">
                            <FormLabel>Password</FormLabel>
                            <QMInput h="56px" placeholder="Password" name="password" type="password" />
                            {/* <Field type="password" name="password" For="password" w={100} /> */}
                            {/* <Input  type="password"  name="password" placeholder="password" /> */}
                            {/* <ErrorMessage name="password" /> */}
                        </FormControl>
                        <Stack spacing={6}>
                            <Stack
                                direction={{ base: 'column', sm: 'row' }}
                                align={'start'}
                                justify={'space-between'}>
                                <Link color={'brand.600'}>Forgot password?<Link as={RouterLink} color="blue.200" to="/forgot-password"> Reset Password </Link></Link>
                                
                               
                            </Stack>
                            <Button type="submit" color={'blue.500'} variant={'solid'}>
                                Sign in
                            </Button>
                        </Stack>
                    </form>
                     )}
                </Formik>
            </Stack>
        </Flex>
        <Flex flex={1}>
            <Image
                alt={'Login Image'}
                objectFit={'cover'}
                src={
                    'images/login.jpeg'
                }
            />
        </Flex>
    </Stack>
    </div>
  )
}

export default CustomLogin
