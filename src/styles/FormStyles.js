const styles = (theme) => {
  return {
    main: {
      display: 'block',
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up('sm')]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      padding: `${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px ${
        theme.spacing.unit * 3
      }px ${theme.spacing.unit * 3}px`,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: theme.spacing.unit * 8,
    },

    avatar: {
      margin: theme.spacing.unit,
    },

    form: {
      width: '100%',
      marginTop: theme.spacing.unit * 3,
    },
    
  };
};

export default styles;
