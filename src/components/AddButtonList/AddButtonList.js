import React, { useState } from 'react';
import List from '../List/List';
import addSvg from '../../assets/img/add.svg';
import './AddButtonList.scss';
import Badge from '../Badge/Badge';
import closeSvg from'../../assets/img/close.svg';

const AddButtonList = ({colors}) => {
    const [state, setState] = useState(false);
    const [activeColor, setActiveColor] = useState(colors[0].id);

    return(
        <div className='add-list'>
            <List 
            onClick={() => {
                setState(true); 
            }}
            items={
                [
                {
                    className: 'list__add-btn',
                    icon: <img className='list__icon-plus' src={addSvg} />, 
                    label: "Добавить список",
                    }
                ]} 
                /> 
            {state && (
                <div className='add-list__popup'>
                    <img 
                        onClick={() => setState(false)}
                        src={closeSvg} 
                        className='add-list__popup-close' />
                    <input className='field' type='text' placeholder='Название задачи' />
                    <div className='add-list__popup-colors'>
                        {colors.map(color => (
                                <Badge 
                                    onClick={() => setActiveColor(color.id)}
                                    key={color.id} 
                                    color={color.name}
                                    className={activeColor === color.id && 'active'} />
                            )
                        )}
                    </div>
                    <button className='button'>Добавить</button>
                </div>
            )}
        </div>
    )
}

export default AddButtonList;