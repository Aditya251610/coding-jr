const Hero = () => {
    return (
      <main className="mt-28 flex flex-col justify-center items-center rounded-2xl bg-gradient-to-b from-white to-[#3B0B93] p-4 md:p-8 lg:mt-32">
        <div className="flex flex-col justify-center items-center text-center w-full">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-[5.2rem] w-full lg:w-[52rem] relative">
            Save $100K with&nbsp;AI customer support
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl w-full lg:w-[36rem] mt-4 lg:mt-8 relative">
            We resolve 60-80% of your customers’ <span className="font-bold">complex</span> support issues via&nbsp;phone, email, and web, reducing your costs by over 50%.
          </p>
  
          <ul className="hidden md:flex justify-between items-center text-sm md:text-base lg:text-lg mt-6 md:mt-12 w-full lg:w-[56rem] mx-8 relative">
            <li>
              <div className="flex justify-between items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 256 256" 
                  className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M216,76H188V48a20,20,0,0,0-20-20H40A20,20,0,0,0,20,48V176a12,12,0,0,0,19.54,9.33l28.46-23V184a20,20,0,0,0,20,20h92.17l36.29,29.33A12,12,0,0,0,236,224V96A20,20,0,0,0,216,76ZM44,150.87V52H164v80H71.58A12,12,0,0,0,64,134.67Zm168,48-20-16.2a12,12,0,0,0-7.54-2.67H92V156h76a20,20,0,0,0,20-20V100h24Z"></path>
                </svg>
                <p className="ml-2">Solves <span className="font-bold">complex</span> issues</p>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 256 256" 
                  className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M224,154.8l-47.09-21.11-.18-.08a19.94,19.94,0,0,0-19,1.75,13.08,13.08,0,0,0-1.12.84l-22.31,19c-13-7.05-26.43-20.37-33.49-33.21l19.06-22.66a11.76,11.76,0,0,0,.85-1.15,20,20,0,0,0,1.66-18.83,1.42,1.42,0,0,1-.08-.18L101.2,32A20.06,20.06,0,0,0,80.42,20.15,60.27,60.27,0,0,0,28,80c0,81.61,66.39,148,148,148a60.27,60.27,0,0,0,59.85-52.42A20.06,20.06,0,0,0,224,154.8ZM176,204A124.15,124.15,0,0,1,52,80,36.29,36.29,0,0,1,80.48,44.46l18.82,42L80.14,109.28a12,12,0,0,0-.86,1.16A20,20,0,0,0,78,130.08c9.42,19.28,28.83,38.56,48.31,48A20,20,0,0,0,146,176.63a11.63,11.63,0,0,0,1.11-.85l22.43-19.07,42,18.81A36.29,36.29,0,0,1,176,204Z"></path>
                </svg>
                <p className="ml-2">Web, phone and email <span className="font-bold">AI support</span></p>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 256 256" 
                  className="w-5 h-5 md:w-6 md:h-6">
                  <path d="M199,125.31l-49.89-18.38L130.69,57a19.92,19.92,0,0,0-37.38,0L74.93,106.93,25,125.31a19.92,19.92,0,0,0,0,37.38l49.89,18.38L93.31,231a19.92,19.92,0,0,0,37.38,0l18.38-49.89L199,162.69a19.92,19.92,0,0,0,0-37.38Zm-60,33.9a19.89,19.89,0,0,0-11.8,11.8L112,212.28,96.79,171A19.89,19.89,0,0,0,85,159.21h0L43.72,144,85,128.79A19.89,19.89,0,0,0,96.79,117L112,75.72,127.21,117a19.89,19.89,0,0,0,11.8,11.8L180.28,144ZM140,40a12,12,0,0,1,12-12h12V16a12,12,0,0,1,24,0V28h12a12,12,0,0,1,0,24H188V64a12,12,0,0,1-24,0V52H152A12,12,0,0,1,140,40ZM252,88a12,12,0,0,1-12,12h-4v4a12,12,0,0,1-24,0v-4h-4a12,12,0,0,1,0-24h4V72a12,12,0,0,1,24,0v4h4A12,12,0,0,1,252,88Z"></path>
                </svg>
                <p className="ml-2"><span className="font-bold">12 times</span> cheaper than Zendesk & Intercom</p>
              </div>
            </li>
          </ul>
  
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6 md:mt-8 relative">
            <div className="rounded-xl bg-black text-white hover:text-opacity-70 transition duration-300 ease-in-out h-12 px-4 text-lg md:text-xl text-center flex justify-center items-center">Get Access</div>
            <div className="flex justify-between items-center gap-1 hover:text-opacity-70 transition duration-300 ease-in-out mt-4 md:mt-0">
              <p>Login</p>
              <svg className="hover:translate-x-2 transition duration-300 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <path d="M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"></path>
              </svg>
            </div>
          </div>

          <div className="relative top-0 left-0 hidden md:flex items-start justify-center h-[40rem] overflow-hidden">
                <img
                    className="relative left-20 top-[21rem]" 
                    decoding="async"
                    sizes="306px"
                    srcSet="https://framerusercontent.com/images/f3nIBf6BqjX3Wy0pQLuHh8ZRx0.png?scale-down-to=512 512w, https://framerusercontent.com/images/f3nIBf6BqjX3Wy0pQLuHh8ZRx0.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/f3nIBf6BqjX3Wy0pQLuHh8ZRx0.png 1500w"
                    src="https://framerusercontent.com/images/f3nIBf6BqjX3Wy0pQLuHh8ZRx0.png"
                    alt=""
                    style={{ 
                        display: 'block', 
                        width: '18rem', 
                        height: '18rem', 
                        borderRadius: 'inherit', 
                        objectPosition: 'center center', 
                        objectFit: 'cover', 
                        imageRendering: 'auto',
                        zIndex: 2 
                    }}
                />

                <img 
                    className="top-0 left-0"
                    decoding="async" 
                    sizes="min(max(min(max(100vw, 1px) - 80px, 1400px), 1px), 1200px)" 
                    srcSet="https://framerusercontent.com/images/VyhrOhGujmP8iT4dw0gDei00Q4.png?scale-down-to=512 512w, https://framerusercontent.com/images/VyhrOhGujmP8iT4dw0gDei00Q4.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/VyhrOhGujmP8iT4dw0gDei00Q4.png 1920w" 
                    src="https://framerusercontent.com/images/VyhrOhGujmP8iT4dw0gDei00Q4.png" 
                    alt=""
                    style={{ 
                        display: 'block', 
                        width: '72rem', 
                        height: '72rem', 
                        objectPosition: 'center center', 
                        objectFit: 'contain', 
                        imageRendering: 'auto' 
                    }} 
                />

                <img
                    className="relative blur right-20 top-28" 
                    decoding="async"
                    sizes="181px"
                    srcSet="https://framerusercontent.com/images/E2w1sSqy1wgCgwxqdqGU0qIljU8.png?scale-down-to=512 512w, https://framerusercontent.com/images/E2w1sSqy1wgCgwxqdqGU0qIljU8.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/E2w1sSqy1wgCgwxqdqGU0qIljU8.png 1500w"
                    src="https://framerusercontent.com/images/E2w1sSqy1wgCgwxqdqGU0qIljU8.png"
                    alt=""
                    style={{ 
                        display: 'block', 
                        width: '18rem', 
                        height: '18rem', 
                        borderRadius: 'inherit', 
                        objectPosition: 'center center', 
                        objectFit: 'cover', 
                        imageRendering: 'auto' 
                    }}
                />
            </div>

        </div>
      </main>
    );
  };
  
  export default Hero;
  