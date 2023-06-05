import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const HomeSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.228 4.53265L8.228 1.42132C7.506 0.859317 6.49467 0.859317 5.772 1.42132L1.772 4.53265C1.28467 4.91132 1 5.49398 1 6.11132V11C1 12.1047 1.89533 13 3 13H11C12.1047 13 13 12.1047 13 11V6.11132C13 5.49398 12.7153 4.91132 12.228 4.53265Z"
      stroke="#797979"
    />
    <path
      d="M5 10.3333H9"
      stroke="#797979"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const HomeIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={HomeSvg} {...props} />;
};

export default HomeIcon;
