import './ImageCard.scss';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const ImageCard = (props) => {
  return (
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
  );
};

export default ImageCard;
