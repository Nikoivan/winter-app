'use client';

import { FC, ReactNode, useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';
import { IClassNameProps } from '@bem-react/core';

import './Tabs.scss';

export type TabProps = {
	title: string;
	index: number;
	content: ReactNode;
};

type TabsProps = {
	tabs: TabProps[];
	startIndex?: number;
} & IClassNameProps;

const cnTabs = cn('Tabs');

const Tabs: FC<TabsProps> = ({ tabs, startIndex, className }) => {
	const [activeIndex, setIndex] = useState<number>(startIndex || 0);

	const handleTabClick = useCallback((index: number) => {
		setIndex(index);
	}, []);

	return (
		<div className={cnTabs()}>
			<ul className={cnTabs('List', ['List', className])}>
				{tabs.map(({ title, index }, idx) => (
					<li
						className={cnTabs('Item')}
						key={idx}>
						<button
							className={cnTabs('ItemBtn', { active: index === activeIndex })}
							onClick={() => handleTabClick(index)}>
							{title}
						</button>
					</li>
				))}
			</ul>
			{tabs[activeIndex].content}
		</div>
	);
};

export default Tabs;
