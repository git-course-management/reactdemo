import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import logo from '../../assets/download.jfif';
import useStyles from './styles';
import {Link, useLocation} from 'react-router-dom';

const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();

  return (
    <>

    <AppBar position='fixed' className={classes.appBar} color='inherit'></AppBar>


        <Toolbar>
                <Typography component={Link} to='/' variant='h6' className={classes.title} color='inherit'>

                    <img src={logo} alt='Commerce shop' height='25px' className={classes.image} />
                    Commerce shop

                </Typography>


                <div className={classes.grow}/>
                {location.pathname == '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to='/cart' aria-label="Show cart items" color='inherit'>
                        <Badge badgeContent={totalItems} color='secondary'>
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                </div> )}
        </Toolbar>

    </>

  )

}

export default Navbar