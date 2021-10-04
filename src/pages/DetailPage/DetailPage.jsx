import './DetailPage.scss';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/path';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Button from '@mui/material/Button';

const DetailPage = () => {
  const location = useLocation();
  const title = location.state?.title;
  const author = location.state?.author;
  const img = location.state?.img;

  document.title = `Reddit Photo | ${title}`;
  return (
    <div className="detail-page-container">
      <div>
        <Link to={ROUTES.COLLECTION}>
          <Button startIcon={<ArrowBackRoundedIcon />} />
          Back to Collection
        </Link>
      </div>
      <h2>Title: {title}</h2>
      <h4>Author: {author}</h4>
      <div className="img-content-wrapper">
        <img src={img} alt={title} />
      </div>
    </div>
  );
};
export default DetailPage;

DetailPage.propTypes = {
  post: PropTypes.object,
};
