import React from 'react'
import './DiningOut.css'
import Collection from '../common/collection/Collection'
import { diningOut } from '../../data/diningOut'
import Filters from '../common/filter/Filters'
import ExploreSection from '../common/ExploreSection'

const collectionList = [
    {
        id: 1,
        title: 'Sea View Dining Places',
        cover: 'https://b.zmtcdn.com/data/collections/1b191329f2c37a474c428131841d488b_1674826227.jpg',
        places: '13 Places'
    },
    {
        id: 2,
        title: 'Romantic Dining Places',
        cover: 'https://b.zmtcdn.com/data/collections/22e92920ef5452cf4d4b9e1f8309da1f_1674824128.jpg',
        places: '13 Places'
    },
    {
        id: 3,
        title: 'Best Insta-worthy Places',
        cover: 'https://b.zmtcdn.com/data/collections/072ec5cf5c95503ab503edcc099f6add_1675252747.jpg',
        places: '16 Places'
    },
    {
        id: 4,
        title: 'Winners of Zomato Restaurant Awards',
        cover: 'https://b.zmtcdn.com/data/collections/77c1b9704985885cbe2cb094e9983eab_1682080540.jpg',
        places: '17 Places'
    },
    {
        id: 5,
        title: 'Breakfast Picks',
        cover: 'https://b.zmtcdn.com/data/collections/158e5bf12f3b9254a2d96055a3d99008_1682935700.jpg',
        places: '16 Places'
    },
    {
        id: 6,
        title: 'Newly Opened Restaurants',
        cover: 'https://b.zmtcdn.com/data/collections/5a235455020ab591941f86eadecd111c_1674824266.jpg',
        places: '14 Places'
    },
    {
        id: 7,
        title: 'Thrilling Live Cricket Screenings',
        cover: 'https://b.zmtcdn.com/data/collections/a1bafc59f9aa67998b9f8de61b9abbd4_1680160968.png',
        places: '15 Places'
    },
    {
        id: 8,
        title: 'Serene Rooftop Places',
        cover: 'https://b.zmtcdn.com/data/collections/2da2ac4aea6e3c8241ab7de09fddf173_1674823998.jpg',
        places: '18 Places'
    }
]

const diningFilters = [
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
        title: 'Online Bookings',
    },
    {
        id: 5,
        title: 'Outdoor Seating',
    },
    {
        id: 6,
        title: 'Rating: 4.0+',
    },
    {
        id: 7,
        icon: <i className='fi fi-rr-angle-dwon absolute-center'></i>,
        title: 'Cuisines',
    },
    {
        id: 8,
        title: 'Cafes',
    },
    {
        id: 9,
        title: 'Open Now',
    },
];

const diningList = diningOut;

const DiningOut = () => {
    return (
        <div>
            <Collection list={collectionList} />
            <div className="max-width">
                <Filters filterList={diningFilters} />
            </div>
            <ExploreSection list={diningList} collectionName={'Dine-Out Restaurants'} />
        </div>
    )
}

export default DiningOut