import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const StarsLightSparkleSvg = () => (
	<svg
		width="24"
		height="24"
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M12 16.0017C12 13.7916 13.7916 12 16.0016 12C13.7916 12 12 10.2084 12 7.99835C12 10.2084 10.2084 12 7.99829 12C10.2084 12 12 13.7916 12 16.0017Z"
			stroke="#A7A6A7"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M18.9398 8.06036C18.9398 6.40282 20.2836 5.05911 21.9411 5.05911C20.2836 5.05911 18.9398 3.71541 18.9398 2.05786C18.9398 3.71541 17.5961 5.05911 15.9386 5.05911C16.7346 5.05911 17.498 5.37531 18.0608 5.93816C18.6236 6.501 18.9398 7.26438 18.9398 8.06036Z"
			fill="#0960DB"
			stroke="#0960DB"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M21.0037 10.9995V17.002C21.0037 19.2121 19.2121 21.0037 17.002 21.0037H6.99788C4.78782 21.0037 2.99622 19.2121 2.99622 17.002V6.99788C2.99622 4.78782 4.78782 2.99622 6.99788 2.99622H13.0004"
			stroke="#A7A6A7"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const StarsLightSparkleIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={StarsLightSparkleSvg}
			{...props}
		/>
	);
};

export default StarsLightSparkleIcon;
