import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { vi } from "vitest";
import { Settings } from "lucide-react";
import SelectInput from "../../../components/shared/SelectInput";

describe("SelectInput Component", () => {
  const mockOptions = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  test("renders select input with options", () => {
    const mockOnChange = vi.fn();
    render(
      <SelectInput value="" onChange={mockOnChange} options={mockOptions} />
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
    expect(screen.getByText("Option 3")).toBeInTheDocument();
  });

  test("renders placeholder option when provided", () => {
    const mockOnChange = vi.fn();
    render(
      <SelectInput
        value=""
        onChange={mockOnChange}
        options={mockOptions}
        placeholder="Select an option"
      />
    );

    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  test("displays selected value", () => {
    const mockOnChange = vi.fn();
    render(
      <SelectInput
        value="option2"
        onChange={mockOnChange}
        options={mockOptions}
      />
    );

    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("option2");
  });

  test("calls onChange when selection changes", async () => {
    const user = userEvent.setup();
    const mockOnChange = vi.fn();
    render(
      <SelectInput value="" onChange={mockOnChange} options={mockOptions} />
    );

    const select = screen.getByRole("combobox");
    await user.selectOptions(select, "option2");

    expect(mockOnChange).toHaveBeenCalledWith("option2");
  });

  test("renders with icon when provided", () => {
    const mockOnChange = vi.fn();
    const { container } = render(
      <SelectInput
        value=""
        onChange={mockOnChange}
        options={mockOptions}
        icon={Settings}
      />
    );

    const iconContainer = container.querySelector(".absolute.inset-y-0.left-0");
    expect(iconContainer).toBeInTheDocument();

    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("pl-10");
  });

  test("renders without icon padding when no icon provided", () => {
    const mockOnChange = vi.fn();
    render(
      <SelectInput value="" onChange={mockOnChange} options={mockOptions} />
    );

    const select = screen.getByRole("combobox");
    expect(select).toHaveClass("pl-3");
    expect(select).not.toHaveClass("pl-10");
  });

  test("applies custom className", () => {
    const mockOnChange = vi.fn();
    const { container } = render(
      <SelectInput
        value=""
        onChange={mockOnChange}
        options={mockOptions}
        className="custom-select"
      />
    );

    expect(container.firstChild).toHaveClass("custom-select");
  });
});
