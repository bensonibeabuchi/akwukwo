// __tests__/Home.test.js
import { render, screen } from "@testing-library/react";
import Home from "@/app/home/page";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

// Mock useRouter
jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: "/",
    prefetch: jest.fn(),
  }),
}));

// Mock next-themes useTheme if used
jest.mock("next-themes", () => ({
  useTheme: () => ({ theme: "light", setTheme: jest.fn() }),
}));

describe("Home page", () => {
  it("renders the heading", () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    const heading = screen.getByRole("heading", { name: /akwukwo/i });
    expect(heading).toBeInTheDocument();
  });
});
