import { screen, render } from "@testing-library/react";
import App from "./App";

test("App should render", () => {
  render(<App />);
  const hello = screen.getByText(/hello/i);
  expect(hello).toBeInTheDocument();
});
