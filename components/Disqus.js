import React, { useEffect } from "react";

const Disqus = ({ url, identifier, src }) => {
	// Disqus for comments.
	useEffect(() => {
		let scriptUrl;
		try {
			scriptUrl = new URL(src);
			if (
				scriptUrl.protocol !== "https:" ||
				!scriptUrl.hostname.endsWith(".disqus.com") ||
				!scriptUrl.pathname.endsWith("/embed.js")
			) {
				return;
			}
		} catch {
			return;
		}
		const DISQUS_SCRIPT = "disq_script";
		const sd = document.getElementById(DISQUS_SCRIPT);
		if (!sd) {
			var disqus_config = function () {
				this.page.url = url;
				this.page.identifier = identifier;
			};

			const d = document;
			const s = d.createElement("script");
			s.src = scriptUrl.toString();
			s.id = DISQUS_SCRIPT;
			s.async = true;
			s.setAttribute("data-timestamp", +new Date());

			d.body.appendChild(s);
		} else {
			window.DISQUS.reset({
				reload: true,
				config: disqus_config,
			});
		}
	}, [identifier, src, url]);
	return <div id="disqus_thread"></div>;
};

export default Disqus;
