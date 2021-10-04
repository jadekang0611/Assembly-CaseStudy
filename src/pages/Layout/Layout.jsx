import './Layout.scss';
const staticData = {
  title: 'Photos from Reddit',
};

const Layout = () => {
  return (
    <div className="default-layout-container">
      <h1>
        {staticData.title} <span>made by Jade</span>
      </h1>
    </div>
  );
};

export default Layout;
