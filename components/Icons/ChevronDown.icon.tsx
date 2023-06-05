import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CheveronDownSvg = () => (
  <svg
    width="8"
    height="8"
    viewBox="0 0 8 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 2.5L4 5.5L1 2.5"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const CheveronDownIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CheveronDownSvg} {...props} />;
};

export default CheveronDownIcon;
