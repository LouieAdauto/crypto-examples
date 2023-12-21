import React, {useEffect, useState} from 'react'
import { Typography, TextField, Button } from '@mui/material';
import CriptoJS from 'crypto-js'
import CryptoENC from 'crypto-js/enc-utf8';

const encrypt = (string, key) => {
  return CriptoJS.AES.encrypt(string, key).toString()
}

const AESComponent = () => {

const [plainText, setPlainText] = useState('')
const [secretKey, setSecretKey] = useState('')
const [encryptedText, setEncryptedText] = useState('')
const [decrypted, setDecrypted] = useState('')
const handleChangePlainText = (e) => {
  setPlainText(e.target.value)
  setEncryptedText(encrypt(e.target.value, secretKey))
}

const handleChangeSecretKey = (e) => {
  setSecretKey(e.target.value)
}

const handleDecrypt = () => {
  setDecrypted(CriptoJS.AES.decrypt(encryptedText, secretKey).toString(CryptoENC))
}

  return (
    <div>
      <Typography color={'lightblue'} variant='h4'>AES algorithm example and implementation</Typography>
      <Typography variant='body1' color={'grey'}>
        This algorithm is the most secure in the world so far, there has not
        been any record of anyone breaking it's security, although it's a 
        symmetrical algorithm it is really secure, the larger the key the harder
        it will be to break.
      </Typography>
      <br />
      <Typography variant='body1' color={'grey'} >This Component implements AES encryption from
        a library, it needs two parameters, the string to encrypt and
        a key to get the initial vector and as said in the presentation
        this secret key will influence the algorithm's behaviour
      </Typography>
      <Typography variant='body1' color={'grey'} >
        Here we will have in real time how the algoritm keeps changing the resulting
        string into a different unreadable string.
      </Typography>
      <br />
      <TextField sx={{margin: 1}} label="Secret Key" value={secretKey} onChange={handleChangeSecretKey} placeholder='Secret key' />
      <br />
      <TextField sx={{margin: 1}} label="Plain text" value={plainText} onChange={handleChangePlainText} placeholder='Plain text' />
      

      <br />
      <Typography variant='h5' color={'lightblue'}>Plain Text: </Typography>
      <Typography variant='h6' color={'grey'}>{plainText}</Typography>
      <br />
      <Typography variant='h5' color={'lightblue'}>Encrypted Text: </Typography>
      <Typography variant='h6' color={'grey'}>{encryptedText}</Typography>
    <Button variant='outlined' onClick={handleDecrypt}>
      Decrypt
    </Button>
    <Typography variant='h5' color={'lightblue'} >Decrypted Text</Typography>
    <Typography variant='h6' color={'grey'}>{decrypted}</Typography>
    </div>
  )
}
export default AESComponent;