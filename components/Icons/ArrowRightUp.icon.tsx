import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const ArrowRightUpSvg = () => (
	<svg
		width="16"
		height="17"
		viewBox="0 0 16 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M11.3 5.2L4.7 11.8"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M11.3 9.91534V5.2L6.58533 5.20067"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ArrowRightUpIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={ArrowRightUpSvg}
			{...props}
		/>
	);
};

export default ArrowRightUpIcon;
