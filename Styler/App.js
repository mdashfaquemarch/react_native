import {ScrollView } from "react-native";
import React from "react";
import FlatCards from "./components/FlatCards.js";
import ElevatedCards from "./components/ElevatedCards.js";
import FancyCard from "./components/FancyCard.js";
import ActionCard from "./components/ActionCard.js";
import ContactList from "./components/ContactList.js";

const App = () => {
  return (
    <ScrollView>
       <FlatCards />
        <ElevatedCards />
       <FancyCard />
       <ActionCard />
       <ContactList />
    </ScrollView>
  );
};

export default App;
