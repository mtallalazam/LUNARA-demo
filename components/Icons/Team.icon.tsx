import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const TeamSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="0.997498"
      y="0.997498"
      width="12.005"
      height="12.005"
      rx="2"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <ellipse
      cx="9.66775"
      cy="6.67053"
      rx="1.33389"
      ry="1.33389"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <circle
      cx="4.99915"
      cy="6.33707"
      r="1.66736"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M8.66736 13.0025V12.3356C8.66736 11.0464 7.62226 10.0013 6.33306 10.0013H3.70196C2.62216 10.0028 1.68499 10.7462 1.43768 11.7973"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M9.66772 10.0052H10.6721C11.5881 10.0078 12.4163 10.5504 12.7844 11.3892"
      stroke="#454545"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const TeamIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={TeamSvg} {...props} />;
};

export default TeamIcon;
