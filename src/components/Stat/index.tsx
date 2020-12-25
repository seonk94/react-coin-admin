import React, { ReactElement } from 'react';
import { StatCard, StatTitle, StatData, StatHelp } from './css';

interface Props {
	title: string;
	data: string | number;
	help?: ReactElement | string | undefined;
}
function Stat({ title, data, help }: Props) {
  return (
    <StatCard>
      <StatTitle>{title}</StatTitle>
      <StatData>{data}</StatData>
      <StatHelp>{help}</StatHelp>
    </StatCard>
  );
}
export default Stat;

Stat.defaultProps = {
  help : undefined
};
