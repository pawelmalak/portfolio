import * as SolidIcons from '@heroicons/react/solid';
import * as OutlineIcons from '@heroicons/react/outline';

interface Props {
  icon: string;
  color?: string;
  size?: number;
  outline?: boolean;
}

export const HeroIcon = (props: Props): JSX.Element => {
  const { icon, color, size, outline = false } = props;

  const { ...icons } = outline ? OutlineIcons : SolidIcons;

  // @ts-ignore
  const Icon: JSX.Element = icons[icon];

  const classes = [
    `${color ? color : 'text-black'}`,
    `h-${size ? size : 6}`,
    `w-${size ? size : 6}`
  ];

  return (
    // @ts-ignore
    <Icon className={classes.join(' ')} />
  );
};
