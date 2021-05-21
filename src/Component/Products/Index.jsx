import React from 'react'
import { Grid } from '@material-ui/core'
import Product from './Product/Index'
import useStyles from './Styles'
/*
let products=[
    {id:'1', name:'shoes', description:'this is shoes',
   image:'https://th.bing.com/th/id/R8da33ece793536ff29d2441596492fd8?rik=fjUJazXOIP5aGA&pid=ImgRaw'},
   {id:'2', name:'mackbook', description:'this is mackbook',
   image:'https://th.bing.com/th/id/R100db0f4f131300545c237dc4be4cba5?rik=qlkGfdfIgTlqzw&pid=ImgRaw'},
   {id:'3', name:'shoes', description:'this is shoes',
   image:'https://th.bing.com/th/id/R8da33ece793536ff29d2441596492fd8?rik=fjUJazXOIP5aGA&pid=ImgRaw'},
   {id:'4', name:'mackbook10', description:'this is mackbook',
   image:'https://m.media-amazon.com/images/I/51EXZboYNRL._AC_SS350_.jpg'},
]
*/

 
const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};
  
  export default Products;