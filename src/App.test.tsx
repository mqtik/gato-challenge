import "@testing-library/jest-dom/extend-expect";
import "intersection-observer";
import { mockAllIsIntersecting } from "react-intersection-observer/test-utils";
import { render, act, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { getJobs } from "./services/base";
import { QueryClient, QueryClientProvider } from "react-query";

const client = new QueryClient();
jest.mock("./services/base", () => ({
  getJobs: jest.fn(),
}));
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ test: 100 }),
  })
) as jest.Mock;

describe("App Component", () => {
  beforeEach(() => {
    (getJobs as jest.Mock).mockResolvedValue([
      { id: 1, title: "Job A" },
      { id: 2, title: "Job B" },
    ]);
  });

  it("renders job items", async () => {
    mockAllIsIntersecting(true);
    act(() =>
      render(
        <QueryClientProvider client={client}>
          <App />
        </QueryClientProvider>
      )
    );

    await waitFor(() => {
      expect(screen.getByText("Job A")).toBeInTheDocument();
      expect(screen.getByText("Job B")).toBeInTheDocument();
    });
  });
});
