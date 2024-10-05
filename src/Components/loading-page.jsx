import React from "react";

export const LoadingPage = () => {
  return (
    <div className="loadingscreen">
      <div className='loadingText'>
        <h1>LOADING ORRERY</h1>
      </div>
      <div className="loadingIcon">
        <svg width="100" height="100" viewBox="0 0 80 80">
          <circle
            cx="40"
            cy="40"
            r="18"
            fill="none"
            stroke="#ccc"
            strokeWidth="1"
          />
          <circle cx="20" cy="20" r="4" fill="#ccc">
            <animateMotion
              dur="2s"
              repeatCount="indefinite"
              path="M 20 2 C 30 2 38 12 38 22 C 38 32 30 38 20 38 C 10 38 2 32 2 22 C 2 12 10 2 20 2"
            />
          </circle>
        </svg>
      </div>
    </div>
  );
};
