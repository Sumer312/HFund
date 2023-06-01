import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import useThemeStore from "./components/themeStore/themeStore";

import { Sidebar, Navbar } from "./components";
import { CampaignDetails, CreateCampaign, Home, Profile } from "./pages";

const App = () => {
  const theme = useThemeStore((state) => state.theme);
  const [stateTheme, setStateTheme] = useState(theme);

  useEffect(() => {
    setStateTheme(theme);
  }, [theme]);

  return (
    <div
      className={
        stateTheme === 1 ? "bg-black text-white" : "bg-white text-black"
      }
    >
      <div className='relative sm:-8 p-4 min-h-screen flex flex-row'>
        <div className='sm:flex hidden mr-10 relative'>
          <Sidebar />
        </div>

        <div className='flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5'>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/create-campaign' element={<CreateCampaign />} />
            <Route path='/campaign-details/:id' element={<CampaignDetails />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
