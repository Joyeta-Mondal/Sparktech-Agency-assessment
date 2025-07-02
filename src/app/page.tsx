
import AboutThisProperty from "@/components/ui/AboutThisProperty"
import AvailabilitySection from "@/components/ui/AvaillabilitySection"
import Footer from "@/components/ui/Footer"
import HotelBanner from "@/components/ui/HotelBanner"
import NavigationMenu from "@/components/ui/NavigationMenu"
import Policies from "@/components/ui/Policies"
import WhatOurGuestsSay from "@/components/ui/WhatOurGuestsSay"
import YouMayAlsoLike from "@/components/ui/YouMayAlsoLike"


export default function Home() {


  return (
   <main>
    <NavigationMenu />
    <HotelBanner />
    <AvailabilitySection />
    <AboutThisProperty />
    <WhatOurGuestsSay />
    <Policies />
    <YouMayAlsoLike />
    <Footer />
   </main>
  )
}
