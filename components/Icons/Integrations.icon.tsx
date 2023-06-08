import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const IntegrationsSvg = () => (
	<svg
		width="16"
		height="16"
		viewBox="0 0 14 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M5.15002 3.30132V3.30132C5.15002 2.27999 5.97802 1.45132 7.00002 1.45132V1.45132C8.02136 1.45132 8.85002 2.27932 8.85002 3.30132V3.30132C8.85002 4.32266 8.02202 5.15132 7.00002 5.15132V5.15132C5.97802 5.14999 5.15002 4.32199 5.15002 3.30132Z"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M0.666687 10.6987V10.6987C0.666687 9.67733 1.49469 8.84866 2.51669 8.84866V8.84866C3.53802 8.84866 4.36669 9.67666 4.36669 10.6987V10.6987C4.36602 11.72 3.53869 12.5487 2.51669 12.5487V12.5487C1.49469 12.5487 0.666687 11.7207 0.666687 10.6987Z"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M9.63397 10.6987V10.6987C9.63397 9.67733 10.462 8.84866 11.484 8.84866V8.84866C12.5053 8.84866 13.334 9.67666 13.334 10.6987V10.6987C13.334 11.72 12.506 12.5487 11.484 12.5487V12.5487C10.4613 12.5487 9.63397 11.7207 9.63397 10.6987H9.63397Z"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M4.66001 6.94666L3.32001 9.03999"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M8 4.85333L9.34 6.94667"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M9.63333 10.7H7"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const IntegrationsIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={IntegrationsSvg}
			{...props}
		/>
	);
};

export default IntegrationsIcon;
