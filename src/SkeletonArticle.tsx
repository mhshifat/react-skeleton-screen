import React from "react";
import Shimmer from "./Shimmer";
import SkeletonEl from "./SkeletonEl";

const SkeletonArticle: React.FC<{ theme?: string }> = ({ theme }) => {
	const themeClass = theme || "light";

	return (
		<div className={`skeleton-wrapper ${themeClass}`}>
			<div className="skeleton-article">
				<SkeletonEl type="title" />
				<SkeletonEl type="text" />
				<SkeletonEl type="text" />
				<SkeletonEl type="text" />
			</div>
			<Shimmer />
		</div>
	);
};

export default SkeletonArticle;
