import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const TransactionSvg = () => (
  <svg
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 7.66649V10.8334C9.99997 11.6618 9.32844 12.3333 8.50005 12.3333H3.49995C3.10225 12.3335 2.72079 12.1756 2.4395 11.8944C2.1582 11.6133 2.00011 11.2319 2 10.8342V7.8333C1.99989 7.43559 2.15777 7.05414 2.43891 6.77284C2.72005 6.49155 3.10142 6.33345 3.49913 6.33334H6"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 10.3333H5.33333"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="6"
      y="1.66669"
      width="8"
      height="6"
      rx="2.25"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="10"
      cy="4.66656"
      r="1"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M13.3333 10.3333V13"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.6667 11.6667L13.3333 10.3333L12 11.6667"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.66665 3.66667V1"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M1.33331 2.33331L2.66665 3.66665L3.99998 2.33331"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const TransactionIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={TransactionSvg} {...props} />;
};

export default TransactionIcon;
