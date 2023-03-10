import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { AuthContext } from 'src/contexts/AuthContext';

import { Grid, Paper, TextField, Button, Typography, Link, Divider } from '@mui/material'

import { db } from "firebase-config";
import { collection, getDocs, addDoc, query, where } from "firebase/firestore";

const Login = () => {
  const router = useRouter()
  let { setLoggedInUser } = useContext(AuthContext)
  const usersCollectionRef = collection(db, "users");

  const paperStyle = { padding: 20, width: 400, margin: "20px auto" }
  const btnstyle = { margin: '8px 0' }

  const [isLogin, setIsLogin] = useState(true);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const validateData = () => {
    let isValid = false
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!isLogin && userName === '' || userName.length <= 4) {
      toast.error('User Name is Required with at-least 5 character');
      return isValid
    } else if (userEmail === "" || !userEmail.match(mailformat)) {
      toast.error('Email not valid');
      return isValid
    } else if (userPassword === "" || userPassword.length <= 4) {
      toast.error('Password  is Required with at-least 5 character');
      return isValid
    }
    isValid = true
    return isValid
  }

  const handleSubmit = async () => {
    const isValid = validateData()
    if (!isValid) return
    if (isLogin) {

      const q = await query(usersCollectionRef, where("email", "==", userEmail), where("password", "==", userPassword),)
      const querySnapshot = await getDocs(q);
      let data: any;
      querySnapshot.forEach((doc) => {
        data = { ...doc.data(), id: doc.id }
      });

      if (!data) {
        toast.error('This User does not exist');
        return
      }
      setLoggedInUser(data)
      toast.success('User login Successfully');
      router.push('/')
      return
    }
    await addDoc(usersCollectionRef, { userName: userName, email: userEmail, password: userPassword, collection: [] });
    toast.success('User Register Successfully');
    setIsLogin(true)
  }

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid sx={{ textAlign: 'center' }}>
          <h2>{isLogin ? "Sign In" : "Sign Up"}</h2>
          <Divider />
        </Grid>
        {
          !isLogin &&
          <Grid sx={{ mb: '10px' }}>
            <TextField
              label='Username'
              placeholder='Enter username'
              variant="outlined"
              fullWidth
              required
              value={userName}
              onChange={(e: any) => setUserName(e.target.value)}
            />
          </Grid>
        }

        <Grid sx={{ mb: '10px' }}>
          <TextField
            label='Email'
            placeholder='Enter email'
            type='email'
            variant="outlined"
            fullWidth
            required
            value={userEmail}
            onChange={(e: any) => setUserEmail(e.target.value)}
          />
        </Grid>
        <Grid sx={{ mb: '10px' }}>
          <TextField
            label='Password'
            placeholder='Enter password'
            type='password'
            variant="outlined"

            fullWidth
            required
            value={userPassword}
            onChange={(e: any) => setUserPassword(e.target.value)}
          />
        </Grid>
        <Button
          type='submit'
          color='primary'
          variant="contained"
          style={btnstyle}
          onClick={handleSubmit}
          fullWidth
        >
          {isLogin ? "Sign in" : "Sign Up"}
        </Button>
        {isLogin ?
          <Typography > Do you have an account ?
            {' '}
            <Link onClick={() => setIsLogin(prev => !prev)}>
              Sign Up
            </Link>
          </Typography> :
          <Typography > Already have an account ?
            {' '}
            <Link onClick={() => setIsLogin(prev => !prev)}>
              LogIn
            </Link>
          </Typography>}
      </Paper>
    </Grid>
  )
}

export default Login