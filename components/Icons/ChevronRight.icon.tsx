import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const CheveronRightIcon = (props: Partial<CustomIconComponentProps>) => {
	const CheveronRightSvg = (width: number, height: number) => (
		<svg
			width={props.width || 8}
			height={props.height || 9}
			viewBox="0 0 8 9"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M2.5 1.5L5.5 4.5L2.5 7.5"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);

	return (
		<Icon
			component={CheveronRightSvg}
			{...props}
		/>
	);
};

export default CheveronRightIcon;
