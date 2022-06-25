import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "../App/App";

describe(`Test my app`, () => {
  test("renders the challenge and tests basic usage", async () => {
    render(<App />);
    const element = screen.getByText(/KPMG technical challenge/i);
    expect(element).toBeInTheDocument();

    const input = screen.getByTestId("app-input");
    expect(input).toBeInTheDocument();

    const word = "middle";

    fireEvent.change(input, { target: { value: word } });

    await waitFor(() => {
      expect((input as HTMLInputElement).value).toBe(word);
    });

    const button = screen.getByTestId("app-button");
    expect(button).toBeInTheDocument();

    const result = screen.getByTestId("app-result");
    expect(result).toBeInTheDocument();

    fireEvent.click(button);
    await waitFor(() => {
      expect(result).toContainHTML("Result: dd");
    });
  });
});
