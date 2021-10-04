import './ImageCard.scss';
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Button,
  Typography,
} from '@mui/material';

const ImageCard = (props) => {
  return (
    <Card>
      <CardMedia
        height="150"
        component="img"
        image={props.img}
        alt={props.alt}
      />
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
