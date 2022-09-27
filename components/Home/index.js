import React, { useEffect, useRef } from 'react';
import Navbar from '../Navbar';
import SocialContact from '../SocialContact';
import store from '../../store';
import useOnScreen from '../../utils';

const Home = () => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (isVisible) {
      store.dispatch({ type: "setPage", payload: { page: "home", isScroll: false } });
    }
  }, [isVisible]);

  return (
    <React.Fragment>
      <div id="home">
        <div className="flex flex-col h-[calc(100vh-80px)] w-full relative">
          <div className="absolute h-full w-full opacity-20">
            <img src="/dotted-bg.jpg" alt="bg" className="h-full w-full object-cover" />
          </div>

          <div className="h-full w-full flex flex-col justify-center items-center z-20">
            <div className="flex md:flex-row flex-col md:pb-8 pb-4">
              <div className="flex flex-col md:order-1 order-2 justify-center md:text-end text-center">
                <h2 ref={ref} className="md:text-4xl text-3xl font-bold">Ahmet Eren BOYACI</h2>
                <h3>Senior Computer Science Student</h3>
                <SocialContact />
              </div>
              <div className="flex flex-col md:order-2 order-1 md:ml-16 ml-0 md:mb-0 mb-6 items-center">
                <img src="/profile.jpg" alt="profile" className="rounded-full md:h-72 md:w-72 h-64 w-64 shadow-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </React.Fragment>
  )
}

export default Home;