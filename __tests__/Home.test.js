import { render, screen } from '@testing-library/react';
import Home from '../src/app/home/page';

// Mock supabase client
jest.mock('../src/lib/supabaseClient', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      order: jest.fn().mockResolvedValue({
        data: [],
        error: null,
      }),
    })),
  },
}));

describe('Home page', () => {
  it('renders the heading', async () => {
    render(<Home />);

    // 🔥 Wait for the heading AFTER loading completes
    const heading = await screen.findByRole('heading', { name: /akwukwo/i });

    expect(heading).toBeInTheDocument();
  });
});
