import React from "react";
import ReactPlayer from "react-player/youtube";
import Moment from "react-moment";
import { renderHtml } from "../utils/renderHtml";

const Featured = ({ item }) => (
	<>
		<div className="container">
			<div
				className="featured"
				id="featured"
				data-aos="zoom-in-up"
				data-aos-delay="200"
			>
				<h1 className="featured-title text-center">Featured Item</h1>
				<div className="item-container">
					<ReactPlayer
						url={item.url}
						id={0}
						className="item"
						width="100%"
						height="100%"
						controls={true}
					/>
				</div>
				<h2>{item.title}</h2>
				<h3>
					Updated on <Moment format="MMM DD, YYYY">{item.date}</Moment>
				</h3>
				<div>{renderHtml(item.description)}</div>{" "}
				{/* Parse html description. */}
			</div>
		</div>
	</>
);

export default Featured;
