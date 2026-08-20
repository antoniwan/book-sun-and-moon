import "@testing-library/jest-dom/vitest";

const memory = new Map();

const localStorageStub = {
  getItem(key) {
    return memory.has(key) ? memory.get(key) : null;
  },
  setItem(key, value) {
    memory.set(String(key), String(value));
  },
  removeItem(key) {
    memory.delete(String(key));
  },
  clear() {
    memory.clear();
  },
  key(index) {
    return [...memory.keys()][index] ?? null;
  },
  get length() {
    return memory.size;
  },
};

Object.defineProperty(window, "localStorage", {
  configurable: true,
  value: localStorageStub,
});
