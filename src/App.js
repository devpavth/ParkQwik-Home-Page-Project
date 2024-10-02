import React from "react";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import FastagRecharge from "./components/fastag-recharge/FastagRecharge";
import Discover from "./components/discover/Discover";
import AddMoneyWallet from "./components/add-money-to-wallet/AddMoneyWallet";
import ThreeDotsIndicator from "./components/threeDotsIndicator/ThreeDotsIndicator";
import OthersSection from "./components/othersSection/OthersSection";
import DealsForYou from "./components/dealsForYou/DealsForYou";
import GonnaTravel from "./components/gonnaTravel/GonnaTravel";
import PremiumPlans from "./components/premiumPlans/PremiumPlans";
import RechargeBillPayments from "./components/rechargeBillPayments/RechargeBillPayments";
import YourCarsCenter from "./components/yourCarsCenter/YourCarsCenter";
import FastagRechargeCard from "./components/fastagRechargeCard/FastagRechargeCard";
import Trending from "./components/trending/Trending";
import ExclusiveOffers from "./components/exclusiveOffers/ExclusiveOffers";
import HowItWorks from "./components/howItWorks/HowItWorks";

function App() {
  return (
    <>
      <Header />
      <Services />
      <FastagRecharge />
      <Discover />
      <AddMoneyWallet />
      <ThreeDotsIndicator />
      <OthersSection />
      <DealsForYou />
      <GonnaTravel />
      <PremiumPlans />
      <RechargeBillPayments />
      <FastagRechargeCard />
      <YourCarsCenter />
      <Trending />
      <ExclusiveOffers />
      <HowItWorks />
    </>
  );
}

export default App;
