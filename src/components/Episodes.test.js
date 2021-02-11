import { render, screen, waitFor } from "@testing-library/react";
import React from "react";
import Episodes from "./Episodes";

//  * ========== Test 1 ========== * //
test("Episodes renders", () => {
	const mockEpisodes = jest.fn();
	console.log("mockEpisodes =====> ", mockEpisodes.mock.results);

	render(<Episodes episodes={mockEpisodes.mock.results} />);
});

//  * ========== Test 2 ========== * //
test("Renders elements to screen", async () => {
	const mockEpisodeData = [
		{
			id: 1,
			image: "mockImg",
			name: "Bob Ross",
			season: 1,
			number: 1,
			summary: "blah, blah, blah",
			runtime: 130,
		},
	];

	render(<Episodes episodes={mockEpisodeData} />);

	const test1 = screen.getByTestId("test-1");
	const test2 = await waitFor(() => screen.getByTestId("test-2"));
	const test3 = await waitFor(() => screen.getByTestId("test-3"));
	const test4 = await waitFor(() => screen.getByTestId("test-4"));
	const test5 = await waitFor(() => screen.getByTestId("test-5"));
	const test6 = await waitFor(() => screen.getByTestId("test-6"));
	const test7 = await waitFor(() => screen.getByTestId("test-7"));
	const test8 = await waitFor(() => screen.getByTestId("test-8"));

	expect(test1).toBeVisible();
	expect(test2).toBeVisible();
	expect(test3).toBeVisible();
	expect(test4).toBeVisible();
	expect(test5).toBeVisible();
	expect(test6).toBeVisible();
	expect(test7).toBeVisible();
	expect(test8).toBeVisible();
});
