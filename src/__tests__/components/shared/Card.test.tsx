import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import Card from "../../../components/shared/Card";

describe("Card Component", () => {
  test("renders card with title and children", () => {
    render(
      <Card title="Test Card">
        <p>Card content</p>
      </Card>
    );

    expect(screen.getByText("Test Card")).toBeInTheDocument();
    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  test("renders action button when action prop is provided", () => {
    const mockAction = vi.fn();
    render(
      <Card
        title="Test Card"
        action={{ label: "Click me", onClick: mockAction }}
      >
        <p>Card content</p>
      </Card>
    );

    const actionButton = screen.getByText("Click me");
    expect(actionButton).toBeInTheDocument();

    fireEvent.click(actionButton);
    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  test("renders more vertical icon when no action is provided", () => {
    render(
      <Card title="Test Card">
        <p>Card content</p>
      </Card>
    );

    const moreButton = screen.getByRole("button");
    expect(moreButton).toBeInTheDocument();
    expect(moreButton).toHaveClass("p-1", "hover:bg-gray-100", "rounded-md");
  });

  test("applies custom className", () => {
    const { container } = render(
      <Card title="Test Card" className="custom-class">
        <p>Card content</p>
      </Card>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
