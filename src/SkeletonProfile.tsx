import React from "react";
import Shimmer from "./Shimmer";
import SkeletonEl from "./SkeletonEl";

const SkeletonProfile: React.FC<{ theme?: string }> = ({ theme }) => {
	const themeClass = theme || "light";

	return (
		<div className={`skeleton-wrapper ${themeClass}`}>
			<div className="skeleton-profile">
				<div>
					<SkeletonEl type="avatar" />
				</div>
				<div>
					<SkeletonEl type="title" />
					<SkeletonEl type="text" />
					<SkeletonEl type="text" />
				</div>
			</div>
			<Shimmer />
		</div>
	);
};

export default SkeletonProfile;
