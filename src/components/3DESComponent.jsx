import React, {useEffect, useState} from 'react'
import { Typography, TextField, Button } from '@mui/material';
import CriptoJS from 'crypto-js'
import CryptoENC from 'crypto-js/enc-utf8';

const encrypt = (string, key) => {
  return CriptoJS.TripleDES.encrypt(string, key).toString()
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
  setDecrypted(CriptoJS.TripleDES.decrypt(encryptedText, secretKey).toString(CryptoENC))
}

  return (
    <div>
      <Typography color={'lightblue'} variant='h4'>3DES algorithm example and implementation</Typography>
      <Typography variant='body1' color={'grey'}>
      In cryptography, Triple DES (3DES or TDES), 
      officially the Triple Data Encryption Algorithm (TDEA or Triple DEA),
       is a symmetric-key block cipher, which applies the DES cipher algorithm three times to each data block. 
       The Data Encryption Standard's (DES) 56-bit key is no longer considered adequate in the face of modern cryptanalytic 
       techniques and supercomputing power. A CVE released in 2016, CVE-2016-2183 disclosed a major security vulnerability 
       in DES and 3DES encryption algorithms
      </Typography>
      <br />
      <Typography variant='body1' color={'grey'} >This Component implements Triple DES encryption from
        a library, it needs two parameters as well as AES since it is symmetric as well, the string to encrypt and
        a key to get the initial vector and as said in the presentation
        this secret key will influence the algorithm's behaviour too
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