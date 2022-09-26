/**
 * @jest-environment jsdom
 */

import "@testing-library/jest-dom";
import {render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddProduct from "./AddProduct.jsx";

test("contains h3 heading", () => {
  render(<AddProduct />);
  const heading = screen.getByRole("heading", {
    name: "Add Product",
    level: 3,
  });
  expect(heading).toBeInTheDocument();
})

// When you click Add to Cart, the form should show up

test("add new product form renders correctly", async () => {
  const user = userEvent.setup();
  render(<AddProduct />);
  const addProductButton = screen.getByText("Add A Product");
  await user.click(addProductButton);
  const addProductForm = screen.getByText("Product Name");
  const addProductQuantity = screen.getByText("Quantity");

  expect(addProductButton).toBeInTheDocument;
  expect(addProductForm).toBeInTheDocument;
  expect(addProductQuantity).toBeInTheDocument;
});

test("input values updating successfully", async () =>{
  const user = userEvent.setup();
  render(<AddProduct />);
  const addProductButton = screen.getByText("Add A Product");
  await user.click(addProductButton);
  const nameBox = screen.getByRole("textbox", {
    name: "Product Name",
  })
  await user.type(nameBox, "Michael");
  expect(nameBox).toHaveValue("Michael");
});


// Submit working
test("submit working correctly", async () => {
  const user = userEvent.setup();
  const onSubmit = jest.fn();
  render(<AddProduct setProduct={onSubmit}/>);
  const addProductButton = screen.getByText("Add A Product");
  await user.click(addProductButton);
  const nameBox = screen.getByRole("textbox", {
    name: "Product Name",
  });
  await user.type(nameBox, "Michael");
  const submitBtn = screen.getByRole("link",{
    name: "Add",
  });
  await user.click(submitBtn);
  expect(onSubmit.mock.calls.length).toBe(1);
});