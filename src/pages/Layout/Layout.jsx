import './Layout.scss';
const staticData = {
  title: 'Photos from Reddit',
};

const Layout = () => {
  return (
    <div className="default-layout-container">
      <h1>{staticData.title}</h1>
    </div>
  );
};

export default Layout;
