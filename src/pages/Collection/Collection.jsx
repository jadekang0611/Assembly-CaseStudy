import { useState, useEffect } from 'react';
import axios from 'axios';
import ImageCard from '../../components/Card/ImageCard';
import Grid from '@mui/material/Grid';
import { api } from '../../constants/api';

const Collection = () => {
  const [redditData, setRedditData] = useState(null);

  useEffect(() => {
    axios.get(api).then((res) => setRedditData(res.data));
  }, []);

  if (!redditData) {
    return <>Loading...</>;
  }
  return (
    <>
      <Grid container spacing={1}>
        <Grid
          container
          item
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          {redditData &&
            redditData.data.children.map((item, i) => {
              return (
                <ImageCard
                  key={i.toString()}
                  img={item.data.thumbnail}
                  alt={item.data.title}
                  title={item.data.title}
                  height={item.data.thumbnail_height}
                  thumbnail={item.data.thumbnail}
                />
              );
            })}
        </Grid>
      </Grid>
    </>
  );
};
export default Collection;
