import React from "react";
import Header from "../Components/HeaderTheme/Header";

export default function Layout({ Component }) {
  return (
    <div className='space-y-5'>
      <Header />
      <div className='pt-3'>
        <Component />
      </div>
    </div>
  );
}
