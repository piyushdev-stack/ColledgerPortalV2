import React from 'react'
import Banner from './Banner/Banner'
import HomepageDetails from './HomepageDetails/HomepageDetails'
import HowItWorks from './HowItWorks/HowItWorks'
import Clients from './Clients/Clients'
import Team from './Team/Team'
import PortalSec from './PortalSec/PortalSec'

const Homepage = () => {
    return (
        <>
            <Banner />
            <HomepageDetails />
            <HowItWorks />
            <Clients />
            <Team />
            <PortalSec />
        </>
    )
}

export default Homepage