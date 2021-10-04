import './DetailPage.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/path';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import Button from '@mui/material/Button';

const DetailPage = (props) => {
  //   console.log(props.location);
  //   document.title = `Reddit Photo | ${props.location.title}`;
  return (
    <div className="detail-page-container">
      <div>
        <Link to={ROUTES.COLLECTION}>
          <Button startIcon={<ArrowBackRoundedIcon />} />
          Back to Collection
        </Link>
      </div>
      <h2>Title:</h2>
      <h4>Author: </h4>
      <div className="img-content-wrapper">
        <img src="" alt="" />
      </div>
    </div>
  );
};
export default DetailPage;

DetailPage.propTypes = {
  post: PropTypes.object,
};
