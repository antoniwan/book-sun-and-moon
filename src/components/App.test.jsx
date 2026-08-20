import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { version } from "../../package.json";
import { REPO_URL } from "../book/content";
import App from "./App";

function renderApp(path = "/") {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

beforeEach(() => {
  window.localStorage.clear();
  window.speechSynthesis = {
    speak: vi.fn(),
    cancel: vi.fn(),
    pause: vi.fn(),
    resume: vi.fn(),
    getVoices: vi.fn(() => []),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    speaking: false,
  };
});

test("renders the cover title", () => {
  renderApp();
  expect(
    screen.getByRole("heading", { name: /Mia, the Sun, and the Moon/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Open the book/i })).toBeInTheDocument();
  expect(document.title).toMatch(/Mia, the Sun, and the Moon/i);
  expect(screen.getByRole("link", { name: `v${version}` })).toHaveAttribute(
    "href",
    REPO_URL
  );
});

test("opens the first story page", () => {
  renderApp();
  fireEvent.click(screen.getByRole("button", { name: /Open the book/i }));
  expect(
    screen.getByText(/Every day, the sun says hi and shines so bright/i)
  ).toBeInTheDocument();
  expect(screen.getByRole("navigation", { name: /Page 1 of 10/i })).toBeInTheDocument();
});

test("canonicalizes a slug-only story path", () => {
  renderApp("/park");
  expect(
    screen.getByText(/Every day, the sun says hi and shines so bright/i)
  ).toBeInTheDocument();
});

test("opens a story page from its numbered path", () => {
  renderApp("/1/park");
  expect(screen.getByRole("navigation", { name: /Page 1 of 10/i })).toBeInTheDocument();
});

test("switches the cover into Spanish", () => {
  renderApp();
  fireEvent.click(screen.getByRole("button", { name: /Español/i }));
  expect(
    screen.getByRole("heading", { name: /Mia, el Sol y la Luna/i })
  ).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /Abrir el cuento/i })).toBeInTheDocument();
});
