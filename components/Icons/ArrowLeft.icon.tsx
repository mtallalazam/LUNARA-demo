import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const ArrowLeftSvg = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M3.33334 8H12.6667"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6.66668 11.3333L3.33334 8"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6.66668 4.66667L3.33334 8"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ArrowLeftIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={ArrowLeftSvg}
			{...props}
		/>
	);
};

export default ArrowLeftIcon;
