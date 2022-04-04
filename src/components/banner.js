function Banner() {
  return (
    <div className="bg-white">
      <div className="relative mx-auto ">
        <div
          className="relative py-14 px-8 overflow-hidden lg:px-16 flex text-start "
          style={{ height: "550px" }}
        >
          <div className="absolute inset-0 mix-blend-multiply">
            <img
              src="/assets/slider.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative lg:col-span-1">
            <blockquote className="mt-6 text-black">
              <h className="lg:text-5xl font-medium text-2xl ">
                Passing it on through <br></br>generations to hold time still
              </h>
              <p className="lg:text-3xl text-base  sm:text-lg py-8">
                Sed at sollicitudin arcu. In sit amet<br></br> commondo neque,
                at interdum neque
              </p>
              <button className="bg-black py-2 px-3 text-white">
                KNOW MORE
              </button>
            </blockquote>
            <div class="flex absolute mt-5 z-30 space-x-3 -translate-x-1/2" style={{marginTop:'120px',marginLeft:'50px'}}>
          <button
            type="button"
            class="w-3 h-3 bg-gray-200 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-gray-100"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full bg-gray-100"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
