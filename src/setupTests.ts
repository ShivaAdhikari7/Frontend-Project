// src/setupTests.ts
import "@testing-library/jest-dom";

// This file runs before all tests
// It sets up helpful testing utilities for TypeScript

// Mock window.matchMedia (some components might need this)
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
