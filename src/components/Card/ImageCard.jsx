import './ImageCard.scss';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageCard = (props) => {
  return (
    <Grid
      item
      xs={4}
      md={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Card
        sx={{ maxWidth: 180 }}
        data-testid="image-card"
        className="image-card"
      >
        <CardMedia
          height={props.height}
          component="img"
          image={props.img}
          alt={props.alt}
        />
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {props.title}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ImageCard;
