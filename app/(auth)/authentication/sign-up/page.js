'use client'

// import node module libraries
import { Row, Col, Card, Form, Button, Image } from 'react-bootstrap';
import Link from 'next/link';

// import hooks
import useMounted from 'hooks/useMounted';
import { supabase } from '../../../../data/utils/supabaseClient'

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SignUp = () => {
  const hasMounted = useMounted();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState(''); // State to hold error message

  const onFormSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    const { data, error } = await supabase.auth.signUp({
      email: e.target.elements.email.value,
      password: 'example-password',
    })

    if (error) {
      setErrorMessage(error.message);
    } else {
      router.push('/');
    }
  }
  
  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        {/* Card */}
        <Card className="smooth-shadow-md">
          {/* Card body */}
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/"><Image src="/images/brand/logo/logo-primary.svg" className="mb-2" alt="" /></Link>
              <p className="mb-6">Please enter your user information.</p>
            </div>
            {/* Form */}
            {hasMounted && 
            <Form onSubmit={onFormSubmit}>
              {/* Username */}
              <Form.Group className="mb-3" controlId="username">
                <Form.Label>Username or email</Form.Label>
                <Form.Control type="text" name="username" placeholder="User Name" required="" style={{ borderColor: errorMessage ? 'red' : '' }}/>
              </Form.Group>

              {/* Email */}
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter address here" required="" style={{ borderColor: errorMessage ? 'red' : '' }}/>
              </Form.Group>

              {/* Password */}
              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="**************" required="" style={{ borderColor: errorMessage ? 'red' : '' }}/>
              </Form.Group>

              {/* Confirm Password */}
              <Form.Group className="mb-3" controlId="confirm-password">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm-password" placeholder="**************" required="" style={{ borderColor: errorMessage ? 'red' : '' }}/>
              </Form.Group>
              {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

              {/* Checkbox */}
              <div className="mb-3">
                <Form.Check type="checkbox" id="check-api-checkbox">
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label>
                    I agree to the <Link href="#"> Terms of Service </Link> and <Link href="#"> Privacy Policy.</Link>
                  </Form.Check.Label>
                </Form.Check>
              </div>

              <div>
                {/* Button */}
                <div className="d-grid">
                  <Button variant="primary" type="submit">Create Free Account</Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4">
                  <div className="mb-2 mb-md-0">
                    <Link href="/authentication/sign-in" className="fs-5">Already member? Login </Link>
                  </div>
                  <div>
                    <Link href="/authentication/forget-password" className="text-inherit fs-5">Forgot your password?</Link>
                  </div>
                </div>
              </div>
            </Form>
            }
          </Card.Body>
        </Card>
      </Col>
    </Row>
  )
}

export default SignUp