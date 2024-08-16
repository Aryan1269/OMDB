import React from 'react';
import loader from '../../public/loader.gif'

export default function Loader() {
    return (
      <>
        <div className="w-screen h-screen grid place-content-center bg-[#1F1E24]">
          <img src={loader} alt="" />
        </div>
      </>
    );
}