import './SearchBar.scss';

const SearchBar = (props) => {
  return (
    <div className="searchBar-container">
      <input type="text" placeholder="Search Post" onChange={props.onChange} />
    </div>
  );
};

export default SearchBar;
