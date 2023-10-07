import React from 'react';
import MessageBarIcon from './../../assets/icons/message-button.svg'

const SideBar = () => {
    return (
        <aside className="SideBar">
                <div className="MessageBar">
                    <img src={MessageBarIcon} alt=""/>
                </div>
        </aside>
    );
};

export default SideBar;