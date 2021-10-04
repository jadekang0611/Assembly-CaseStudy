import { ThemeProvider } from '@mui/material';
import theme from './theme';
import Layout from './pages/Layout';
import Collection from './pages/Collection/Collection';
// import { api } from './constants/api';

function App() {
  // const [data, setData] = useState('');

  // useEffect(() => {
  //   fetch(api)
  //     .then((response) => response.json())
  //     .then((myData) => setData(myData));
  // }, []);

  return (
    // <div className="App">
    //   {data &&
    //     data.data.children.map((child, i) => {
    //       return (
    //         <img key={i} src={child.data.thumbnail} alt={child.data.title} />
    //       );
    //     })}
    // </div>
    <ThemeProvider theme={theme}>
      <Layout />
      <Collection />
    </ThemeProvider>
  );
}

export default App;
