import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const ApiSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.0238 8.73333H6.3353"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M6.53331 9.33333L5.56131 6.33333H4.80531L3.83331 9.33333"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M8.16669 6.33333H9.33335C9.79359 6.33333 10.1667 6.70642 10.1667 7.16666V7.16666C10.1667 7.38768 10.0789 7.59964 9.92261 7.75592C9.76633 7.9122 9.55437 7.99999 9.33335 7.99999H8.16669V6.33333Z"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.16665 6.33333V9.33333"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.8333 6.33333V9.33333"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <rect
      x="1.33331"
      y="1.33333"
      width="13.3333"
      height="13.3333"
      rx="2"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const ApiIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={ApiSvg} {...props} />;
};

export default ApiIcon;
