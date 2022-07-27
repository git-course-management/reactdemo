import React from 'react'
import {Container, Typography, Button, Grid} from '@material-ui/core';
import useStyles from './styles';
import CartItem from './CartItem/CartItem';
import {Link} from 'react-router-dom';

const Cart = ({cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart}) => {
const isEmpty = !cart.line_items?.length;
const classes = useStyles();

const EmptyCart = () => (
    <Typography variant='subtitle1'>
    Cart empty
    <Link to='/' className={classes.link}>add some</Link>
    </Typography>
);

const FilledCart = () => (
    <> 
        <Grid container spacing={3}>  
            {cart.line_items.map((item) => (
                <Grid items xs={12} sm={4} key={item.id}>
                   <CartItem item={item} handleUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>

                </Grid>
            ))}
            
        </Grid>
        <div className={classes.classDetails}>
            <Typography variant='h4'>
                Subtotal: {cart.subtotal.formatted_with_symbol}
            </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='Button' variant='contained' color='secondary' onClick={handleEmptyCart}>Empty cart</Button>
                    <Button className={classes.checkoutButton} size='large' type='Button' variant='contained' color='primary'>Checkout</Button>
                </div>
        </div>
    </>
);

  return (
    <Container>
        
        <div className={classes.toolbar}/>
        <Typography className={classes.title} variant='h3' gutterBottom>Your cart</Typography>
{isEmpty ? <EmptyCart/> : <FilledCart/>}
    </Container>
  )
}

export default Cart