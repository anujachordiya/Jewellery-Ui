export default function JewelleryBanner() {
  return (
    <div className="bg-white">
      <div className="mx-auto pt-8 sm:pt-8 ">
        <div className="grid items-center grid-cols-1 gap-x-8 lg:grid-cols-2">
          <div>
            <div className="aspect-w-1 relative aspect-h-1 bg-gray-100 overflow-hidden">
              <img
                src="/assets/collectiton-reat.jpg"
                className="w-full h-full object-center object-cover"
              />
              <div className="absolute">dfg</div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4 sm:gap-6 sm:mt-6 lg:gap-8 lg:mt-8">
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 overflow-hidden">
                <img
                  src="/assets/gold-necklace.jpg"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <div className="aspect-w-1 aspect-h-1 bg-gray-100 overflow-hidden">
                <img
                  src="/assets/diamond-jewellery.png"
                  className="w-full h-full object-center object-cover"
                />
              </div>
            </div>
          </div>
          <div className="group aspect-w-2 aspect-h-1 overflow-hidden sm:aspect-h-1 sm:aspect-w-1 sm:row-span-2">
            <img
              src="/assets/bride.jpg"
              className="object-center object-cover group-hover:opacity-75"
            />

          </div>
        </div>
      </div>
    </div>
  );
}
