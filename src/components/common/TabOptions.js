import React from 'react'
import './TabOptions.css'

const tab = [
    {
        id: 1,
        name: 'Delivery',
        active_img: '/delivery.png',
        backdrop: '#FCEEC0',
        inactive_img: '/delivery1.png'
    },
    {
        id: 2,
        name: 'Dining Out',
        active_img: '/dine.png',
        backdrop: '#E5F3F3',
        inactive_img: '/dine1.png'
    },
    {
        id: 3,
        name: 'Nightlife',
        active_img: '/night.png',
        backdrop: '#EDf4FF',
        inactive_img: '/night1.png'
    },
];
const TabOptions = ({ activeTab, setActiveTab }) => {
    return (
        <div className='tab-options'>
            <div className="max-width options-wrapper">
                {tab.map((tab) => {
                    return (
                        <div key={tab.id} onClick={() => setActiveTab(tab.name)} className={`tab-item absolute-center cur-po ${activeTab === tab.name && 'active-tab'}`}>
                            <div className='tab-image-container absolute-center' style={{ backgroundColor: `${activeTab === tab.name ? tab.backdrop : ''}` }}>
                                <img src={activeTab === tab.name ? tab.active_img : tab.inactive_img} alt={tab.name} className='tab-image' />
                            </div>
                            <div className="tab-name">{tab.name}</div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default TabOptions