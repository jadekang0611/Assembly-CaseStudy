import { makeStyles, Typography } from '@mui/material';

const staticData = {
  title: 'Assembly Case Study',
  position: 'Frontend Engineer',
};



const Layout = () => {
  return (
    <div className="default-layout-container">
      <h1>{staticData.title}</h1>
      <h2>{staticData.position}</h2>
    </div>
  );
};

export default Layout;
