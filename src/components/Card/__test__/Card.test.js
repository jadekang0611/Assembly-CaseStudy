import ReactDOM from 'react-dom';
import ImageCard from '../ImageCard';

// Test whether the image card component reders
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageCard />, div);
});
