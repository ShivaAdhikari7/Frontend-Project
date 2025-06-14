import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import ErrorCard from "../../../components/shared/ErrorCard";

describe("ErrorCard Component", () => {
  test("renders error message and retry button", () => {
    const mockRetry = vi.fn();
    render(<ErrorCard error="Something went wrong" onRetry={mockRetry} />);

    expect(screen.getByText("Something went wrong")).toBeInTheDocument();
    expect(screen.getByText("Retry")).toBeInTheDocument();
  });

  test("calls onRetry when retry button is clicked", () => {
    const mockRetry = vi.fn();
    render(<ErrorCard error="Something went wrong" onRetry={mockRetry} />);

    const retryButton = screen.getByText("Retry");
    fireEvent.click(retryButton);

    expect(mockRetry).toHaveBeenCalledTimes(1);
  });

  test("shows loading state when loading prop is true", () => {
    const mockRetry = vi.fn();
    render(
      <ErrorCard
        error="Something went wrong"
        onRetry={mockRetry}
        loading={true}
      />
    );

    const retryButton = screen.getByText("Retrying...");
    expect(retryButton).toBeDisabled();
    // Check for the conditional Tailwind classes that apply when disabled
    expect(retryButton).toHaveClass(
      "disabled:opacity-50",
      "disabled:cursor-not-allowed"
    );
  });

  test("renders AlertCircle icon", () => {
    const mockRetry = vi.fn();
    render(<ErrorCard error="Something went wrong" onRetry={mockRetry} />);

    // Check if the icon container exists
    const iconContainer = screen
      .getByText("Something went wrong")
      .closest(".flex")
      ?.querySelector(".flex-shrink-0");
    expect(iconContainer).toBeInTheDocument();
  });
});
