import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="40"
        height="30"
        viewBox="0 0 340.000000 250.000000"
        preserveAspectRatio="xMidYMid meet"
        color-interpolation-filters="sRGB"
        className="text-wood"
      >
        <rect x="0" y="0" width="100%" height="100%" fill="#ffffff" fillOpacity="1" className="background"></rect>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#watermark)" fillOpacity="1" className="watermarklayer"></rect>
        <g fill="#A67C52" className="iconblsvg-g iconsvg" transform="translate(64.75776672363281,100.56266784667969)">
          <g className="tp-name" transform="translate(0,0)">
            <g data-gra="path-name" transform="translate(0, 3.004331588745117)">
              <g transform="scale(1)">
                <path d="M25.68-4.55L25.68 0 4.93 0Q4.44 0 4.02-0.17 3.6-0.35 3.3-0.66 2.99-0.96 2.82-1.38 2.64-1.8 2.64-2.29L2.64-2.29 2.64-25.09 7.19-25.09 7.19-4.55 25.68-4.55ZM48.87-12.65L48.87-12.65Q48.87-11.7 48.53-10.61 48.2-9.52 47.46-8.58 46.71-7.65 45.52-7.02 44.32-6.39 42.6-6.39L42.6-6.39 34.4-6.39 34.4-10.71 42.6-10.71Q43.53-10.71 44.04-11.28 44.55-11.84 44.55-12.68L44.55-12.68Q44.55-13.58 43.98-14.08 43.41-14.59 42.6-14.59L42.6-14.59 34.4-14.59Q33.47-14.59 32.96-14.02 32.46-13.45 32.46-12.61L32.46-12.61 32.46-6.26Q32.46-5.35 33.02-4.85 33.59-4.34 34.43-4.34L34.43-4.34 42.6-4.34 42.6 0 34.4 0Q33.45 0 32.36-0.33 31.27-0.66 30.33-1.41 29.39-2.15 28.76-3.35 28.13-4.55 28.13-6.26L28.13-6.26 28.13-12.65Q28.13-13.59 28.47-14.69 28.8-15.78 29.54-16.72 30.29-17.65 31.48-18.28 32.68-18.91 34.4-18.91L34.4-18.91 42.6-18.91Q43.55-18.91 44.64-18.58 45.73-18.25 46.67-17.5 47.61-16.76 48.24-15.56 48.87-14.36 48.87-12.65Z" transform="translate(-2.640000104904175, 26.90999984741211)"></path>
              </g>
            </g>
            <g transform="translate(49.22999954223633, 0)">
              <g>
                <g className="imagesvg">
                  <g>
                    <rect fill="#A67C52" fillOpacity="0" strokeWidth="2" x="0" y="0" width="31.2144634525661" height="32.91866261620714" className="image-rect"></rect>
                    <svg x="0" y="0" width="31.2144634525661" height="32.91866261620714" className="image-svg-svg primary" style={{ overflow: 'visible' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0.5529995560646057 -5.961418310107547e-7 28.447004318237305 30" x="0px" y="0px">
                        <path fillRule="evenodd" d="M11 25h2v-2h-2v2zm16.723-4.219L25.201 17H27v-1a7.577 7.577 0 0 0-1.277-4.219L24.535 10H25V9a7.577 7.577 0 0 0-1.277-4.219l-2.336-3.504A2.866 2.866 0 0 0 19 0c-.961 0-1.853.478-2.387 1.277l-2.336 3.504A7.577 7.577 0 0 0 13 9v1h.465l-1.297 1.945 1.664 1.11L15.868 10H17V8h-1.911a5.594 5.594 0 0 1 .852-2.109l2.336-3.504c.323-.485 1.123-.485 1.446 0l2.336 3.504c.428.642.716 1.358.852 2.109H20v2h2.132l1.927 2.891c.428.642.716 1.358.852 2.109H20v2h2.798l3.261 4.891c.428.642.716 1.358.852 2.109H20v2h9v-1a7.577 7.577 0 0 0-1.277-4.219zM17 21h-2v7H9v-5H7v5H5v-7H3v7H1v2h28v-2H17v-7zM.553 18.605L3 17.382V14h2v2.382l5-2.5 9.447 4.723-.894 1.79L10 16.118l-8.553 4.277-.894-1.79z"></path>
                      </svg>
                    </svg>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <span className="font-serif text-xl text-wood-dark hidden md:block">
        Le Chalet du Salève
      </span>
    </div>
  );
};

export default Logo;