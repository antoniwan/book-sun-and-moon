import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

beforeEach(() => {
  window.localStorage.clear();
  window.history.replaceState(null, "", "/");
  window.speechSynthesis = {
    speak: jest.fn(),
    cancel: jest.fn(),
    pause: jest.fn(),
    resume: jest.fn(),
    getVoices: jest.fn(() => []),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    speaking: false,
  };
});

test("renders the cover title", () => {
  render(<App />);
  expect(
    screen.getByRole("heading", { name: /Mia, the Sun, and the Moon/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Open the book/i })).toBeInTheDocument();
  expect(document.title).toMatch(/Mia, the Sun, and the Moon/i);
});

test("opens the first story page", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: /Open the book/i }));
  expect(
    screen.getByText(/Every day, the sun says hi and shines so bright/i)
  ).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /Page 1 of 10/i })).toBeInTheDocument();
});

test("switches the cover into Spanish", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("button", { name: /Español/i }));
  expect(
    screen.getByRole("heading", { name: /Mia, el Sol y la Luna/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Abrir el cuento/i })).toBeInTheDocument();
});
