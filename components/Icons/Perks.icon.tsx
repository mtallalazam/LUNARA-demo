import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const PerksSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M7.99933 9.92268L9.33666 10.6253C9.59666 10.762 9.90133 10.5413 9.85133 10.2513L9.59599 8.76268L10.678 7.70934C10.8887 7.50401 10.7727 7.14601 10.4813 7.10401L8.98666 6.88668L8.31799 5.53134C8.18799 5.26734 7.81199 5.26734 7.68133 5.53134L7.01333 6.88668L5.51866 7.10401C5.22733 7.14601 5.11133 7.50401 5.32199 7.70934L6.40399 8.76268L6.14866 10.2513C6.09866 10.5413 6.40333 10.762 6.66333 10.6253L8.00066 9.92268H7.99933V9.92268Z"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.3334 8.00001H13.6"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M2.40002 8.00001H1.66669"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5734 3.42667L11.8734 4.12667"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.44 12.5933L4.14667 11.8867"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3.4267 3.44L4.1267 4.14667"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.5933 12.5733L11.8867 11.8733"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.00002 13.6267V14.3333"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.00002 1.66667V2.37334"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const PerksIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={PerksSvg} {...props} />;
};

export default PerksIcon;
