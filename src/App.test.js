import { render, fireEvent } from "@testing-library/react";
import App from "./App";

describe("<App />", () => {
  it("should add 2 numbers", async () => {
    const { findByTestId, debug } = render(<App />);

    const param1 = await findByTestId("param1");
    fireEvent.change(param1, { target: { value: 5 } });

    const param2 = await findByTestId("param2");
    fireEvent.change(param2, { target: { value: 7 } });

    const sum = await findByTestId("sum");
    fireEvent.click(sum);

    const result = await findByTestId("result");
    expect(result.textContent).toBe("12");
  });
});
