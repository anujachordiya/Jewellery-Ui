function StoreNearMe() {
  return (
    <div className="bg-white py-8 lg:py-6">
      <div className="relative">
        <div className="relative py-16 px-8 overflow-hidden lg:px-16 items-center flex text-center justify-center">
          <div className="absolute inset-0 mix-blend-multiply">
            <img
              src="/assets/storeNearMe.svg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative lg:col-span-1 items-center flex flex-col text-center justify-center">
            <img
              className="h-20 w-auto"
              src="/assets/location.svg"
              alt=""
            />
            <blockquote className="mt-6 text-white">
              <p className="lg:text-4xl sm:text-2xl">
                Bhima Store Near You
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StoreNearMe;
