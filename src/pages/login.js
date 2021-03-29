import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert} from 'react-bootstrap'
import {useAuth} from '../context/AuthContext'
import { Link, useHistory} from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()


    async function handlesSubmit(e) {
        e.preventDefault()
        console.log(emailRef.current.value)
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/create")
        }   catch {
            setError('Failed to sign in')
        }

        setLoading(false)
    }

     return (
         <>
            <Card>
                <Card.Body className="text-center mb-4">
                    <h2>Log In</h2>
                    {error && <Alert variant="danger">error</Alert>}
                    <Form onSubmit={handlesSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required />
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center m-2">
                Need an account? <Link to="/signup">Sign Up</Link>
            </div>
        </>
     )
}
