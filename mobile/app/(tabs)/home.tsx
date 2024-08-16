import { SafeAreaView, StatusBar, ScrollView } from "react-native";
import React from "react";
import { AddNewCard, Header, UserCredStatus } from "@/components/pages/home";
import Main from "@/components/pages/home/Main";

const Home = () => {
  return (
    <SafeAreaView className="flex-1">
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView className="flex-1 w-full bg-background px-6">
        <Header />
        <AddNewCard />
        <UserCredStatus />
        {/* <Main /> */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
