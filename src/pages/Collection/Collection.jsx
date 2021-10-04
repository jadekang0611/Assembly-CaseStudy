import { useState, useEffect } from 'react';
import './Collection.scss';
import axios from 'axios';
import ImageCard from '../../components/Card/ImageCard';
import { api } from '../../constants/api';
import SearchBar from '../../components/SearchBar';
import Loading from '../Loading';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/path';

const Collection = () => {
  const [redditData, setRedditData] = useState(null);
  const [search, setSearch] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  function changeHandler(e) {
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
    return <Loading />;
  }
  return (
    <div className="collection-layout-container">
      <SearchBar onChange={changeHandler} />
      <div className="collection-grid-container">
        {filteredData &&
          filteredData.map((item, i) => {
            return (
              <>
                <Link
                  to={{
                    pathname: ROUTES.CARD + `/${item.data.author}`,
                    state: {
                      title: item.data.title,
                      img: item.data.url_overridden_by_dest,
                      author: item.data.author_fullname,
                      ups: item.data.ups,
                    },
                  }}
                >
                  <ImageCard
                    key={i.toString()}
                    img={item.data.thumbnail}
                    alt={item.data.title}
                    title={item.data.title}
                    height={item.data.thumbnail_height}
                  />
                </Link>
              </>
            );
          })}
      </div>
    </div>
  );
};
export default Collection;
