import React from 'react'
import './NightLife.css'
import Collection from '../common/collection/Collection'
import Filters from '../common/filter/Filters'
import ExploreSection from '../common/ExploreSection'
import { nightLife } from '../../data/nightLife'

const collectionList = [
    {
        id: 1,
        title: 'Finest Microbreweries',
        cover: 'https://b.zmtcdn.com/data/collections/d7755d2b4aea34ef9bfce4d60838750d_1674826498.jpg',
        places: '22 Places'
    },
    {
        id: 2,
        title: 'Best Bars & Pubs',
        cover: 'https://b.zmtcdn.com/data/collections/740c74e2e5d27bbbfdc0d722d9735d07_1674826727.jpg',
        places: '20 Places'
    },
    {
        id: 3,
        title: 'Lit Party Places',
        cover: 'https://b.zmtcdn.com/data/collections/d6c20926317f6753461c59af08d566f1_1674820841.jpg',
        places: '20 Places'
    }
]

const nightFilters = [
    {
        id: 1,
        icon: <i className='fi fi-rr-settings-sliders absolute-center'></i>,
        title: 'Filters',
    },
    {
        id: 2,
        icon: <i className='fi fi-rr-angle-down absolute-center'></i>,
        title: 'Pro Offers',
    },
    {
        id: 3,
        icon: <i className='fi fi-rr-apps-sort absolute-center'></i>,
        title: 'Distance',
    },
    {
        id: 4,
        title: 'Rating: 4.0+',
    },
    {
        id: 5,
        title: 'Pubs & Bars',
    }
];

const nightList = nightLife;
const NightLife = () => {
    return (
        <div>
            <Collection list={collectionList} />
            <div className="max-width">
                <Filters filterList={nightFilters} />
            </div>
            <ExploreSection list={nightList} collectionName={'Nightlife Restaurants'} />
        </div>
    )
}

export default NightLife