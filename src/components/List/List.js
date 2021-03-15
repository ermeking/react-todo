import React from 'react';
import classNames from 'classnames';

import './List.scss';
import Badge from '../Badge/Badge';

const List = ({items, isRemovable, onClick}) => {
    return(
        <ul onClick={onClick} className='list'>
            {items.map((item, index) => (
                <li key={index} className={classNames(item.className, {'active' : item.active})}>
                <i>{item.icon
                    ? item.icon
                    : <Badge color={item.color} />
                }</i>
                <span>{item.label}</span>
              </li>
            ))}
        </ul>
    )
}

export default List;