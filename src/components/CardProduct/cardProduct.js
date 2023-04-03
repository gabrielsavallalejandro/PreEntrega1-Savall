import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './cardProduct.css';
/* import CardList from '../CardList/cardList'; */

const CardProduct = ({product}) => {
  return (
    <Card sx={{ maxWidth: 345, maxHight: 200}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt={product.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name} 
          </Typography>
          <Typography variant="body2" color="text.secondary">
          $ {product.price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
export default CardProduct

  