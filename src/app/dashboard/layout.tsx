import type { Metadata } from "next";
import WebPageNav from "../../../components/WebPageNav";
import React from "react";
import SideBar from "../../../components/SideBar";
import WorkSpacesNavBar from "../../../components/WorkSpacesNavBar";
import "./index.css";
import WorkSpacesBody from "../../../components/WorkSpacesBody";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <WebPageNav />
      <div className="dashboard-container">
        <SideBar />
        <div className="dashboard-body">
          <WorkSpacesNavBar />
          <WorkSpacesBody />
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}