import icons from 'simple-icons';

interface Props {
  icon: string;
  size: number;
  color?: string;
}

export const SimpleIcon = (props: Props): JSX.Element => {
  const { icon, size, color } = props;

  // Find icon
  const { title, path, hex } = icons.Get(icon);

  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={size}
      height={size}
      fill={color || `#${hex}`}
      viewBox='0 0 24 24'
    >
      <title>{title}</title>
      <path d={path} />
    </svg>
  );
};
