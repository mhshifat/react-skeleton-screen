import React, { useEffect, useState } from "react";
import SkeletonArticle from "./SkeletonArticle";

const Articales = () => {
	const [articles, setArticles] = useState<any>(null);

	useEffect(() => {
		setTimeout(async () => {
			const result = await fetch("https://jsonplaceholder.typicode.com/posts");
			const data = await result.json();
			setArticles(data);
		}, 5000);
	}, []);

	return (
		<div className="articles">
			<h2>Articles</h2>

			{articles &&
				articles.map((article: any) => (
					<div className="article" key={article.id}>
						<h3>{article.title}</h3>
						<p>{article.body}</p>
					</div>
				))}

			{!articles &&
				new Array(5).fill("").map((_, ind) => <SkeletonArticle key={ind} />)}
		</div>
	);
};

export default Articales;
