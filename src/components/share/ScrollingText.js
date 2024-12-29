// src/components/share/ScrollingText.js

import React from "react";

const ScrollingText = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="whitespace-nowrap animate-marquee text-center text-black text-sm mt-4 px-8">
        <p>Sehabis makan tolong buang sampah pada tempatnya!</p>
      </div>
    </div>
  );
};

export default ScrollingText;
