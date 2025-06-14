import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import SearchInput from "../../../components/shared/SearchInput";

describe("SearchInput Component", () => {
  test("renders search input with default placeholder", () => {
    const mockOnChange = vi.fn();
    render(<SearchInput value="" onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText("Search...");
    expect(input).toBeInTheDocument();
  });

  test("renders search input with custom placeholder", () => {
    const mockOnChange = vi.fn();
    render(
      <SearchInput
        value=""
        onChange={mockOnChange}
        placeholder="Search users..."
      />
    );

    const input = screen.getByPlaceholderText("Search users...");
    expect(input).toBeInTheDocument();
  });

  test("displays current value", () => {
    const mockOnChange = vi.fn();
    render(<SearchInput value="test query" onChange={mockOnChange} />);

    const input = screen.getByDisplayValue("test query");
    expect(input).toBeInTheDocument();
  });

  test("calls onChange when input value changes", async () => {
    const user = userEvent.setup();
    const mockOnChange = vi.fn();
    render(<SearchInput value="" onChange={mockOnChange} />);

    const input = screen.getByPlaceholderText("Search...");
    await user.type(input, "new search");

    expect(mockOnChange).toHaveBeenCalledTimes(10); // Called for each character
    expect(mockOnChange).toHaveBeenLastCalledWith("new search");
  });

  test("applies custom className", () => {
    const mockOnChange = vi.fn();
    const { container } = render(
      <SearchInput value="" onChange={mockOnChange} className="custom-search" />
    );

    expect(container.firstChild).toHaveClass("custom-search");
  });

  test("renders search icon", () => {
    const mockOnChange = vi.fn();
    const { container } = render(
      <SearchInput value="" onChange={mockOnChange} />
    );

    const iconContainer = container.querySelector(".absolute.inset-y-0.left-0");
    expect(iconContainer).toBeInTheDocument();
  });
});
