import parse from "html-react-parser";
import sanitizeHtml from "sanitize-html";

export const renderHtml = (value) =>
	parse(
		sanitizeHtml(String(value || ""), {
			allowedTags: [...sanitizeHtml.defaults.allowedTags, "img"],
			allowedAttributes: {
				a: ["href", "name", "target", "rel"],
				img: ["src", "alt", "title", "width", "height", "loading"],
			},
			allowedSchemes: ["http", "https", "mailto"],
			transformTags: {
				a: sanitizeHtml.simpleTransform("a", {
					rel: "noopener noreferrer",
				}),
				img: sanitizeHtml.simpleTransform("img", { loading: "lazy" }),
			},
		})
	);
