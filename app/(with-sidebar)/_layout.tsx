import Sidebar from "@/components/Sidebar";
import { Slot } from "expo-router";
import React from "react";

function Layout() {
  return (
    <Sidebar>
      <Slot />
    </Sidebar>
  );
}

export default Layout;
