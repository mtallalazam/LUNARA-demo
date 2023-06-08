import Icon from "@ant-design/icons";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const PaymentSvg = () => (
	<svg
		width="16"
		height="15"
		viewBox="0 0 15 14"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
	>
		<path
			d="M12.3333 5.66667V2.33333C12.3333 1.59695 11.7364 1 11 1H2.33333C1.59695 1 1 1.59695 1 2.33333V11.6667C1 12.403 1.59695 13 2.33333 13H5"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M3.66669 4.33333H9.66669"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M3.66669 6.99999H5.00002"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M3.66669 9.66668H4.33335"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			d="M13.6667 9.66668H7"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
		<path
			fillRule="evenodd"
			clipRule="evenodd"
			d="M7 8.99999V11.6667C7 12.403 7.59695 13 8.33333 13H12.3333C13.0697 13 13.6667 12.403 13.6667 11.6667V8.99999C13.6667 8.26361 13.0697 7.66666 12.3333 7.66666H8.33333C7.59695 7.66666 7 8.26361 7 8.99999Z"
			stroke="#454545"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);

const PaymentsIcon = (props: Partial<CustomIconComponentProps>) => {
	return (
		<Icon
			component={PaymentSvg}
			{...props}
		/>
	);
};

export default PaymentsIcon;
