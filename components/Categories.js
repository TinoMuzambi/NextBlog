import { GlobalContext } from "../context/GlobalState";
import Link from "next/link";

const Categories = () => {
	const { categories } = useContext(GlobalContext);

	return (
		<>
			<h2>Categories</h2>
			<ul className="category-list">
				{categories.map((category, key) => (
					<Link href={`/categories/${category.url}`} key={key}>
						<a>
							<li
								className="list-items"
								data-aos="fade-left"
								data-aos-delay="200"
							>
								{category.name}
								<span>({category.count})</span>
							</li>
						</a>
					</Link>
				))}
			</ul>
		</>
	);
};

export default Categories;

Categories.defaultProps = {
	categories: [],
};
