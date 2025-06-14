import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { Users } from "lucide-react";
import EmptyState from "../../../components/shared/EmptyState";

describe("EmptyState Component", () => {
  test("renders empty state with icon, title, and description", () => {
    render(
      <EmptyState
        icon={Users}
        title="No users found"
        description="There are no users to display"
      />
    );

    expect(screen.getByText("No users found")).toBeInTheDocument();
    expect(
      screen.getByText("There are no users to display")
    ).toBeInTheDocument();
  });

  test("renders action button when action prop is provided", () => {
    const mockAction = vi.fn();
    render(
      <EmptyState
        icon={Users}
        title="No users found"
        description="There are no users to display"
        action={{ label: "Add User", onClick: mockAction }}
      />
    );

    const actionButton = screen.getByText("Add User");
    expect(actionButton).toBeInTheDocument();

    fireEvent.click(actionButton);
    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  test("does not render action button when action prop is not provided", () => {
    render(
      <EmptyState
        icon={Users}
        title="No users found"
        description="There are no users to display"
      />
    );

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
