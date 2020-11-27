import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: theme.shadows[1],
    backgroundColor: 'currentColor',
    width: 20,
    height: 20,
    borderRadius: '50%',
  },
}));

const SwitchThumb = () => {
  const classes = useStyles();
  return <span className={classes.root} />;
};

export default SwitchThumb;
