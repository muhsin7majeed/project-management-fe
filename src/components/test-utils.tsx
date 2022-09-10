import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";

interface Data {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mockData?: any;
}

const AllTheProviders: FC<{ children: React.ReactNode; data?: Data }> = ({ children, data }) => {
  return (
    <MockedProvider mocks={data?.mockData} addTypename={false}>
      <BrowserRouter>
        <ChakraProvider>{children}</ChakraProvider>
      </BrowserRouter>
    </MockedProvider>
  );
};

const customRender = (ui: ReactElement, data?: Data, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: ({ children }) => <AllTheProviders data={data}> {children}</AllTheProviders>, ...options });

export * from "@testing-library/react";
export { customRender as render };
