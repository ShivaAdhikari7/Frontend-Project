import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Loading from "../../../components/shared/Loading";

describe("Loading Component", () => {
  test("renders loading spinner with default medium size", () => {
    const { container } = render(<Loading />);

    const spinner = container.querySelector(".animate-spin");
    expect(spinner).toBeInTheDocument();
    expect(spinner).toHaveClass("h-8", "w-8");
  });

  test("renders loading spinner with small size", () => {
    const { container } = render(<Loading size="sm" />);

    const spinner = container.querySelector(".animate-spin");
    expect(spinner).toHaveClass("h-4", "w-4");
  });

  test("renders loading spinner with large size", () => {
    const { container } = render(<Loading size="lg" />);

    const spinner = container.querySelector(".animate-spin");
    expect(spinner).toHaveClass("h-12", "w-12");
  });

  test("renders loading text when provided", () => {
    render(<Loading text="Loading data..." />);

    expect(screen.getByText("Loading data...")).toBeInTheDocument();
  });

  test("does not render text when not provided", () => {
    const { container } = render(<Loading />);

    expect(container.querySelector("span")).not.toBeInTheDocument();
  });
});
