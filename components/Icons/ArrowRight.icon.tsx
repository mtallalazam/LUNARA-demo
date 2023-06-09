import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const ArrowRightSvg = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12.6667 8H3.33333"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M9.33333 4.66667L12.6667 8"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M9.33333 11.3333L12.6667 8"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ArrowRightIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={ArrowRightSvg}
			{...props}
		/>
	);
};

export default ArrowRightIcon;
