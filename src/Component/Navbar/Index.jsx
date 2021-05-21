import React from 'react';
import { AppBar, IconButton, Toolbar, Typography,Badge} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import useStyles from './Styles'
import logo from '../../assets/commerce.png'
import {Link,useLocation} from 'react-router-dom'

const NavBar = ({totalItems}) => {
    let classes=useStyles()
    let location =useLocation()
    
    return (
       <>
       <AppBar position='fixed' className={classes.appBar} color="inherit">
           <Toolbar>
               <Typography variant='h6' className={classes.title} color='inherit' component={Link} to='/'>
                   <img src={logo} alt='commerce.js' height='25px' className={classes.image}/>
                   Azhar.com
               </Typography>
               <div className={classes.grow} />
             
                    {
                         
                        location.pathname=='/' && (
                            <div className={classes.button}>
                            <IconButton aria-label='Show cart items' component={Link} to='/cart' color='inherit'>
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>
                      </div>
                        )}
                    

              
                
           </Toolbar>

       </AppBar>
       </>
    )
}

export default NavBar
