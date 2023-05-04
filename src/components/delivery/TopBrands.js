import React from 'react'
import './TopBrands.css'
import NextArrow from '../common/carousel/NextArrow';
import PrevArrow from '../common/carousel/PrevArrow';
import Slider from 'react-slick';

const brandList = [
    {
        id: 1,
        time: '29 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/0e6f4a6a6d54c88d548abaa04a0227bc_1625164827.png?output-format=webp'
    },
    {
        id: 2,
        time: '19 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017911.png?output-format=webp'
    },
    {
        id: 3,
        time: '40 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/1a985408ca7ad8fd097f2c47db9c5cb6_1611252779.png?output-format=webp'
    },
    {
        id: 4,
        time: '14 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/9302c59eca94abbee01aec9acf9305f6_1676520651.png?output-format=webp'
    },
    {
        id: 5,
        time: '27 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/6a11fd0f30c9fd9ceaff2f5b21f61d23_1617188211.png?output-format=webp'
    },
    {
        id: 6,
        time: '38 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/c38f7540bcc5a38e918856ac06409056_1504531339.png?output-format=webp'
    },
    {
        id: 7,
        time: '30 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/80c09d718acddee05a655eb378bb442f_1617874818.png?output-format=webp'
    },
    {
        id: 8,
        time: '27 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/9c390005a3b36e2f209b5868d536973f_1639679267.png?output-format=webp'
    },
    {
        id: 9,
        time: '17 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/3c2a7f7e5fc15add88437a4891a7c229_1675833518.png?output-format=webp'
    },
    {
        id: 10,
        time: '30 min',
        cover: 'https://b.zmtcdn.com/data/brand_creatives/logos/dc25345966698c3077d648ecf3c5b3d1_1643349213.png?output-format=webp'
    },
]

const settings = {
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
};

const TopBrands = () => {
    return (
        <div className='top-brands max-width'>
            <div className='collection-title'>Top brands for you</div>
            <Slider {...settings}>
                {brandList.map((brand) => {
                    return (
                        <div key={brand.id}>
                            <div className='top-brands-cover'>
                                <img src={brand.cover} alt='' className='top-brands-image' />
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default TopBrands