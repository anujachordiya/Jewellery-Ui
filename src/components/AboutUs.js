function AboutUs() {
  return (
    <section className="py-6 overflow-hidden md:py-20 lg:py-12" style={{backgroundColor:'#fff8ef'}}>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <h1 className="text-center text-2xl font-medium">
            What They Talk About Us
          </h1>
          <div className="mt-10 border px-5 border-gray-200 p-5 rounded-lg">
            <div className="px-16 mx-auto text-center text-xl leading-9  text-gray-900">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Nemo expedita voluptas culpa
                sapiente alias molestiae. Numquam corrupti in laborum sed rerum
                et corporis.
              </p>
            </div>
            <footer className="mt-8">
              <div className="md:flex md:items-center md:justify-center">
                <div className="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                  <div className="text-base font-medium text-gray-900">
                    <p>Lorem ipsium Amet</p>
                    <p> Nulla, vulputate</p>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>

        <div class="flex absolute  mt-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
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
    </section>
  );
}

export default AboutUs;
