import { useState, useEffect } from 'react';
import './Collection.scss';
import axios from 'axios';
import ImageCard from '../../components/Card/ImageCard';
import Grid from '@mui/material/Grid';
import { api } from '../../constants/api';
import SearchBar from '../../components/SearchBar';

const Collection = () => {
  const [redditData, setRedditData] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  function changeHandler(e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  useEffect(() => {
    axios.get(api).then((res) => setRedditData(res.data));
  }, []);

  useEffect(() => {
    setFilteredData(
      redditData &&
        redditData.data.children.filter((data) =>
          data.data.title.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [search, redditData]);

  if (!redditData) {
    return (
      <div className="loading-wrapper">
        <img
          src="https://www.redditinc.com/assets/images/site/reddit-logo.png"
          alt="reddit logo"
        />
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <div className="collection-layout-container">
      <SearchBar onChange={changeHandler} />
      <Grid container spacing={1} className="collection-grid-container">
        <Grid
          container
          item
          rowSpacing={2}
          columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          justifyContent="center"
          alignItems="center"
        >
          {filteredData &&
            filteredData.map((item, i) => {
              return (
                <ImageCard
                  key={i.toString()}
                  img={item.data.thumbnail}
                  alt={item.data.title}
                  title={item.data.title}
                  height={item.data.thumbnail_height}
                />
              );
            })}
        </Grid>
      </Grid>
    </div>
  );
};
export default Collection;
