import ReactDOM from 'react-dom';
import ImageCard from '../ImageCard';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
// Test whether the image card component reders
afterEach(cleanup);

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ImageCard />, div);
});

it('should show image when the card is loaded', async () => {
  const src = 'imageUrl';
  const { getByAltText } = await render(
    <ImageCard img={src} alt="Image from a Reddit Source" />
  );
  const imgRender = getByAltText('Image from a Reddit Source');
  expect(imgRender).toBeInTheDocument();
  expect(imgRender).toHaveAttribute('src', src);
});

it('should show title when the card is loaded', async () => {
  const { getByTestId } = await render(<ImageCard title="Image 1" />);
  expect(getByTestId('image-card')).toHaveTextContent('Image 1');
});
