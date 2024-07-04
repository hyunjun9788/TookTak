import { HTMLAttributes } from 'react';
import VisibilityIcon from '../../../public/visibility.svg?react';
import VisibilityOffIcon from '../../../public/visibility-off.svg?react';
import AddIcon from '../../../public/add.svg?react';
import CloseIcon from '../../../public/close.svg?react';
import DropDownIcon from '../../../public/drop-down.svg?react';
import DropUpIcon from '../../../public/drop-up.svg?react';

export type IconType =
  | 'VisibilityIcon'
  | 'VisibilityOffIcon'
  | 'AddIcon'
  | 'CloseIcon'
  | 'DropDownIcon'
  | 'DropUpIcon';

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
  AddIcon,
  CloseIcon,
  DropDownIcon,
  DropUpIcon,
};

export const Icon = ({ name, className, onClick }: IconProps) => {
  const IconComponent = iconTypes[name];

  return <IconComponent className={className} onClick={onClick} />;
};
