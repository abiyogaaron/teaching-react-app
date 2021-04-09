import React, { FC, ReactElement } from 'react';

interface IFooterCardProps {
  name: string;
}

const FooterCard: FC<IFooterCardProps> = ({
  name,
}): ReactElement => {
  return (
    <h1>{name}</h1>
  )
}

export default FooterCard;