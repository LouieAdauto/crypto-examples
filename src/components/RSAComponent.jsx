import React, { useState } from 'react'
import { Typography, Divider, TextField, Button } from '@mui/material'

const getToken = async ({username, password}) => {
    const response = await fetch("http://localhost:4000/gettoken", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            //make sure to serialize your JSON body
            body: JSON.stringify({
                username,
                password
            })
        })
        return response.json()

}

const RSAComponent = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState('')

    const handleChangeUsername = (e) => {
        setUsername(e.target.value)
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = async () => {
        
        const {data}  = await getToken({username, password})     
        setToken(data?.token)
    }
    


    return (
        <div>
            <Typography color={'lightblue'} variant='h4'>RSA algorithm example and implementation</Typography>
            <Typography variant='body1' color={'grey'}>
                This algorithm is widely used by several security systems
                around the world, and in this app we are using it right now, let me show you:
            </Typography>
            <Typography variant='body1' color={'grey'}>
                The explanation is not simple at all, but I will show you with an example, first off,
                we have a super common scenario which is putting our user and password into some fields:
            </Typography>
            <Divider />
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 20 }}>
                <TextField onChange={handleChangeUsername} value={username} variant='outlined' placeholder='User' autoComplete='chrome-off' type='text' />
                <TextField onChange={handleChangePassword} value={password} variant='outlined' placeholder='Password' type='password' autoComplete='chrome-off' />
                <Button onClick={handleLogin} variant='outlined'>Login</Button>
            </div>
            <Divider />
            <br/>
            <Typography variant='body1'>Once Login is pressed, we'll call our small backend and JWT will automatically convert our data into a token
                that we'll not be able to read
            </Typography>
            <br/>
            <div>
            <Typography>{token}</Typography>
            </div>
        </div>
    )
}

export default RSAComponent