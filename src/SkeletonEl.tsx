import React from "react";

const SkeletonEl: React.FC<{ type: string }> = ({ type }) => {
	const classes = `skeleton ${type}`;

	return <div className={classes}></div>;
};

export default SkeletonEl;
