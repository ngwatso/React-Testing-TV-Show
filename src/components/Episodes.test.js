import { render } from "@testing-library/react";
import React from "react";
import Episodes from "./Episodes";

//  * ========== Test 1 ========== * //
test("Episodes renders", () => {
	const mockEpisodes = jest.fn();
	console.log("mockEpisodes =====> ", mockEpisodes.mock.results);

	render(<Episodes episodes={mockEpisodes.mock.results} />);
});
