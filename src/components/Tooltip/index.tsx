import React from 'react';

import * as TooltipStyle from './styles';

interface TooltipProps {
  title: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <TooltipStyle.Container className={className}>
      {children}
      <span>{title}</span>
    </TooltipStyle.Container>
  );
};

export default Tooltip;
