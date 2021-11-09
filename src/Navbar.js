import React, { Component, useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles/NavbarStyles';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@material-ui/core/InputBase';
import { LanguageContext } from './contexts/languageContext';
import { ThemeContext } from './contexts/themeContext';

const languages = {};

const Navbar = (props) => {
  const { classes } = props;
  const { toggleIsDark } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.language}>
            <span style={{ color: 'white' }}>{language}</span>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            NavBar
          </Typography>

          <Switch onChange={toggleIsDark} color="error" />
          <div className={classes.grow} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Navbar);
