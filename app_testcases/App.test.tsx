import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import App from "../src/App";
import "@testing-library/jest-dom";

describe("App Component", () => {
  it("renders the calculator display", () => {
    render(<App />);
    const display = screen.getByRole("textbox");
    expect(display).toBeInTheDocument();
    expect(display).toHaveValue("");
  });

  it("updates display when number buttons are clicked", () => {
    render(<App />);
    const button7 = screen.getByText("7");
    const button8 = screen.getByText("8");

    fireEvent.click(button7);
    fireEvent.click(button8);

    const display = screen.getByRole("textbox");
    expect(display).toHaveValue("78");
  });

  it("performs addition correctly", () => {
    render(<App />);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("3"));
    fireEvent.click(screen.getByText("="));

    const display = screen.getByRole("textbox");
    expect(display).toHaveValue("5");
  });

  it("clears the display when AC is clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("9"));
    fireEvent.click(screen.getByText("AC"));

    const display = screen.getByRole("textbox");
    expect(display).toHaveValue("");
  });

  it("deletes the last character when DEL is clicked", () => {
    render(<App />);
    fireEvent.click(screen.getByText("1"));
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("DEL"));

    const display = screen.getByRole("textbox");
    expect(display).toHaveValue("1");
  });

  it("shows Error for invalid expressions", () => {
    render(<App />);
    fireEvent.click(screen.getByText("2"));
    fireEvent.click(screen.getByText("+"));
    fireEvent.click(screen.getByText("+")); // This might append, let's see logic
    fireEvent.click(screen.getByText("="));

    const display = screen.getByRole("textbox");
    expect(display).toHaveValue("Error");
  });
});
