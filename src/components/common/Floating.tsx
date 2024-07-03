import { useState } from 'react';
import Button, { ButtonKind } from './Button';
import { Icon } from './Icon';

const Floating = ({ onModalAlert }: { onModalAlert: () => void }) => {
  return (
    <Button onClick={onModalAlert} type="button" kind={ButtonKind.floating}>
      <Icon name="AddIcon" className={`w-[40px] text-white `} />
    </Button>
  );
};

export default Floating;
