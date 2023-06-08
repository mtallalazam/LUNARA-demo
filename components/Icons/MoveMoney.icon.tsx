import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const MoveMoneySvg = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 16 16"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M7.05689 10.944C6.67538 10.5625 6.56125 9.98876 6.76771 9.49032C6.97416 8.99187 7.46055 8.66687 8.00007 8.66687C8.53958 8.66687 9.02597 8.99187 9.23242 9.49032C9.43888 9.98876 9.32475 10.5625 8.94324 10.944C8.69311 11.1941 8.35383 11.3347 8.00007 11.3347C7.6463 11.3347 7.30702 11.1941 7.05689 10.944"
			stroke="#E4FFFF"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M11.6682 11.3347V8.66693"
			stroke="#E4FFFF"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M4.33189 11.3347V8.66693"
			stroke="#E4FFFF"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M7.99998 5.33222V1.9975"
			stroke="#E4FFFF"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M9.33392 3.33139L8.00003 1.9975L6.66614 3.33139"
			stroke="#E4FFFF"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M10.6678 5.99915H12.6687C13.0225 5.99905 13.3618 6.13955 13.612 6.38973C13.8622 6.6399 14.0026 6.97924 14.0026 7.33303V12.6686C14.0026 13.0224 13.8622 13.3617 13.612 13.6119C13.3618 13.8621 13.0225 14.0026 12.6687 14.0025H3.33145C2.97765 14.0026 2.63831 13.8621 2.38814 13.6119C2.13796 13.3617 1.99756 13.0224 1.99756 12.6686V7.33303C1.99756 6.97924 2.13796 6.6399 2.38814 6.38973C2.63831 6.13955 2.97765 5.99905 3.33145 5.99915H5.33228"
			stroke="#E4FFFF"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const MoveMoneyIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={MoveMoneySvg}
			{...props}
		/>
	);
};

export default MoveMoneyIcon;
