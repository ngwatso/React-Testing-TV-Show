import React from "react";
import App from "./App";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import { fetchShow as mockFetchShow } from "../api/fetchShow";

// * ==========Test 1 ========== * //
test("App renders", async () => {
	await waitFor(() => render(<App />));
});
