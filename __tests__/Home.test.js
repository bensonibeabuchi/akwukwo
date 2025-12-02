import { render, screen } from '@testing-library/react';
import Home from '@/app/home/page';

describe('Home page', () => {
  it('renders the heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /akwukwo/i });
    expect(heading).toBeInTheDocument();
  });
});
