import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const SearchSvg = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<circle
			cx="11.0586"
			cy="11.0586"
			r="7.06194"
			stroke="#595959"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M20.0033 20.0033L16.0517 16.0517"
			stroke="#595959"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const SearchIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={SearchSvg}
			{...props}
		/>
	);
};

export default SearchIcon;
