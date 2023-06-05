import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const RefreshSvg = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.9975 6.66613L4.56723 4.09639C5.48418 3.17941 6.72789 2.66432 8.02467 2.66446V2.66446C10.0237 2.6646 11.8214 3.88169 12.5639 5.73774L12.6686 5.99918"
      stroke="#A4A4A4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.66528 6.66613H1.9975V3.99835"
      stroke="#A4A4A4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M14.0025 9.33389L11.4328 11.9036C10.5158 12.8206 9.27211 13.3357 7.97532 13.3356V13.3356C5.97626 13.3354 4.17863 12.1183 3.4361 10.2623L3.33139 10.0008"
      stroke="#A4A4A4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M11.3347 9.33389H14.0025V12.0017"
      stroke="#A4A4A4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const RefreshIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={RefreshSvg} {...props} />;
};

export default RefreshIcon;
