import * as React from 'react';
import{Card,CardContent,CardMedia,Typography,CardActionArea} from "@mui/material";

const ItemDetailContainer = ({data}) => {
  return (
    <div className='itemContainer'>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height={200}
              image= {data.img}
              alt= {data.name}
            />
            <CardContent>
              <Typography  gutterBottom variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2" color="text.secondary" style={{fontSize:20}}>
                ${data.price}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
    </div>
    
  );
}
export default ItemDetailContainer;
