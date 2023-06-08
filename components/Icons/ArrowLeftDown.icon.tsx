import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const ArrowLeftDownSvg = () => (
	<svg
		width="16"
		height="17"
		viewBox="0 0 16 17"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4.69999 11.8L11.3 5.2"
			stroke="#FF5448"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M4.69998 7.08466V11.8L9.41464 11.7993"
			stroke="#FF5448"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ArrowLeftDownIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={ArrowLeftDownSvg}
			{...props}
		/>
	);
};

export default ArrowLeftDownIcon;
