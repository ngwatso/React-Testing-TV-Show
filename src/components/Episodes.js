import React from "react";
import parse from "html-react-parser";

// ?? Added test ID's to test elements render

export default function Episodes(props) {
	return (
		<div className="episodes" data-testid="test-1">
			{props.episodes.map((e) => (
				<div className="episode" key={e.id} data-testid="test-2">
					{e.image && (
						<img
							data-testid="test-3"
							className="episode-image"
							src={e.image.medium}
							alt={e.name}
						/>
					)}
					<div className="episode-info" data-testid="test-4">
						<p
							className="episode-number"
							data-testid="test-5"
						>
							Season {e.season}, Episode {e.number}
						</p>
						<h3 data-testid="test-6">{e.name}</h3>
						{e.summary && parse(e.summary)}
						<div
							data-testid="test-7"
							className="flex-spacer"
						/>
						<p
							data-testid="test-8"
							className="episode-runtime"
						>
							{e.runtime} minutes
						</p>
					</div>
				</div>
			))}
		</div>
	);
}
