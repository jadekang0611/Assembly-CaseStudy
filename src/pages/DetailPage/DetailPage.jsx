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
  const ups = location.state?.ups;

  document.title = `Reddit Photo | ${title}`;
  return (
    <div className="detail-page-container">
      <div>
        <Link to={ROUTES.COLLECTION} className="link-to-collection">
          <Button startIcon={<ArrowBackRoundedIcon />} />
          Back to Collection
        </Link>
      </div>
      <div className="detail-content-container">
        <div className="text-wrapper">
          <h3>What's happening here?</h3>
          <p>
            <span>{title}</span> posted by <span>{author}</span> is getting so
            many reddit users attention now. <span>{author}'s</span> post has so
            far got <span>{ups}</span> votes!
          </p>
        </div>
        <div className="img-content-wrapper">
          <img src={img} alt={title} />
        </div>
      </div>
    </div>
  );
};
export default DetailPage;

DetailPage.propTypes = {
  post: PropTypes.object,
};
