/* eslint-disable testing-library/prefer-screen-queries */
import { render } from '@testing-library/react';
import App from './App';
import React from "react";


describe("App Component Layout", () => {
  test("check if the heading is rendered", async () => {
    const { getByText } = render(<App data={[]} />);
    const headingText = getByText("Todomatic");
    expect(headingText).toBeDefined();
  });

  test("remaining task text to be rendered", async () => {
    const { getByTestId } = render(<App data={[]} />);
    expect(getByTestId("remaining-task")).toHaveTextContent("0 task remaining");
  });
});