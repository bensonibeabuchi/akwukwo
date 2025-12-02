// __tests__/Home.test.js
import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';

// **Mock the supabase client**
jest.mock('../src/lib/supabaseClient', () => ({
  supabase: {
    from: jest.fn(() => ({
      select: jest.fn().mockReturnThis(),
      insert: jest.fn().mockReturnThis(),
      update: jest.fn().mockReturnThis(),
      delete: jest.fn().mockReturnThis(),
      eq: jest.fn().mockReturnThis(),
    })),
    auth: {
      signInWithPassword: jest.fn(),
      signOut: jest.fn(),
    },
  },
}));

describe('Home page', () => {
  it('renders the heading', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { name: /akwukwo/i });
    expect(heading).toBeInTheDocument();
  });
});
