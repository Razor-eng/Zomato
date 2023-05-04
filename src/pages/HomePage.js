import React, { useState } from 'react'
import Header from '../components/common/Header'
import TabOptions from '../components/common/TabOptions'
import Footer from '../components/common/Footer'
import Delivery from '../components/delivery/Delivery'
import DiningOut from '../components/dining/DiningOut'
import NightLife from '../components/night/NightLife'

const HomePage = () => {
    const [activeTab, setActiveTab] = useState('Delivery')
    const getCorrectScreen = (tab) => {
        switch (tab) {
            case 'Delivery':
                return <Delivery />
            case 'Dining Out':
                return <DiningOut />
            case 'Nightlife':
                return <NightLife />
            default:
                return <Delivery />
        }
    }
    return (
        <div>
            <Header />
            <TabOptions activeTab={activeTab} setActiveTab={setActiveTab} />
            {getCorrectScreen(activeTab)}
            <Footer />
        </div>
    )
}

export default HomePage