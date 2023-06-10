import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const PaperPlaneSvg = () => (
	<svg
		width="12"
		height="12"
		viewBox="0 0 12 12"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7.32199 9.954L10.05 2.594C10.1985 2.193 9.80799 1.803 9.40749 1.9515L2.04499 4.6815C1.58449 4.8525 1.62049 5.5155 2.09699 5.635L5.51399 6.4935L6.36749 9.9015C6.48749 10.3785 7.15099 10.415 7.32199 9.954V9.954Z"
			stroke="#828282"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M9.93501 2.065L5.51501 6.495"
			stroke="#828282"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const PaperPlaneIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={PaperPlaneSvg}
			{...props}
		/>
	);
};

export default PaperPlaneIcon;
