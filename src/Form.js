import React, { Component, useContext } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/FormStyles';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import LockIcon from '@mui/icons-material/Lock';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { LanguageContext } from './contexts/languageContext';

const languages = {
  english: {
    signIn: 'Sign In',
    email: 'Email',
    password: 'Password',
    remember: 'Remember Me',
  },
  spanish: {
    signIn: 'iniciar sesión',
    email: 'Correo electrónico',
    password: 'contraseña',
    remember: 'recordar',
  },
  french: {
    signIn: "'S'identifier",
    email: 'E-mail',
    password: 'le mot de passe',
    remember: 'rappelles toi',
  },
};

const Form = (props) => {
  const { classes } = props;
  const { language, setLanguage } = useContext(LanguageContext);
  const { signIn, email, password, remember } = languages[language];

  return (
    <div className={classes.main}>
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar} sx={{ backgroundColor: 'darkred' }}>
          <LockIcon />
        </Avatar>
        <Typography sx={{ marginBottom: 2 }} variant="h5">
          {signIn}
        </Typography>
        <Select
          value={language}
          onChange={({ target }) => setLanguage(target.value)}
        >
          <MenuItem value="english">English</MenuItem>
          <MenuItem value="spanish">Spanish</MenuItem>
          <MenuItem value="french">French</MenuItem>
        </Select>

        <form className={classes.form}>
          <FormControl margin="normal" fullWidth required>
            <InputLabel htmlFor="email">{email}</InputLabel>
            <Input id="email" />
          </FormControl>
          <FormControl margin="normal" fullWidth required>
            <InputLabel htmlFor="password">{password}</InputLabel>
            <Input id="paddword" />
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="error"
            sx={{ marginTop: 3 }}
          >
            {signIn}
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default withStyles(styles)(Form);
