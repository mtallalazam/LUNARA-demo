import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const ExpandSvg = () => (
	<svg
		width="14"
		height="14"
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M4.33334 8.33335L5.66668 7.00002L4.33334 5.66669"
			stroke="#F8F8F8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M6.33333 13H4.33333C2.49238 13 1 11.5076 1 9.66667V4.33333C1 2.49238 2.49238 1 4.33333 1H6.33333"
			stroke="#F8F8F8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9.66668 1C11.5076 1 13 2.49238 13 4.33333V9.66667C13 11.5076 11.5076 13 9.66668 13H8.33334V1H9.66668Z"
			stroke="#F8F8F8"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const ExpandIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={ExpandSvg}
			{...props}
		/>
	);
};

export default ExpandIcon;
