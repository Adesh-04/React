import React from 'react'
import { Container, Form, FormGroup, Row } from 'react-bootstrap'

export const Signup = () => {
    return (
        <Container>
            <h1 className='text-center mt-5'>Welcome</h1>
            <Form className = 'mt-5' style={{maxWidth:"25rem", marginLeft:"28rem"}}>
                <FormGroup>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type='email'placeholder='example@something.com' />
                    <Form.Text className='text-muted'>Your data is safe with us.</Form.Text>
                </FormGroup>
            </Form>
        </Container>
    )
}


