import { HTMLAttributes } from 'react';
import VisibilityIcon from '../../../public/visibility.svg?react';
import VisibilityOffIcon from '../../../public/visibility-off.svg?react';

export type IconType = 'VisibilityIcon' | 'VisibilityOffIcon';

export interface IconProps {
  name: IconType;
  className: HTMLAttributes<SVGAElement>['className'];
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

export const iconTypes: Record<
  IconType,
  React.ComponentType<React.SVGProps<SVGSVGElement>>
> = {
  VisibilityIcon,
  VisibilityOffIcon,
};

export const Icon = ({ name, className, onClick }: IconProps) => {
  const IconComponent = iconTypes[name];

  return <IconComponent className={className} onClick={onClick} />;
};
