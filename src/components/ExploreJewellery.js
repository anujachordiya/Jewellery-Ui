const products = [
  {
    id: 1,
    name: "GOLD COIN",
    href: "#",
    imageSrc:
      "/assets/coin.svg",
    imageAlt: "GOLD COIN",
    
  },

  {
      id: 2,
      name: "DIAMOND JEWELLERY",
      href: "#",
      imageSrc:
        "/assets/ring.svg",
      imageAlt: "DIAMOND JEWELLERY",
      
    },
    {
      id: 3,
      name: "GEMSTONE JEWELLERY",
      href: "#",
      imageSrc:
        "/assets/stoneNecklace.svg",
      imageAlt: "GEMSTONE JEWELLERY",
      
    },
    {
      id: 4,
      name: "TRADITIONAL JEWELLERY",
      href: "#",
      imageSrc:
        "/assets/necklace.svg",
      imageAlt: "TRADITIONAL JEWELLERY",
      
    },
    {
      id: 5,
      name: "GOLD JEWELLERY",
      href: "#",
      imageSrc:
        "/assets/earring.svg",
      imageAlt: "GOLD JEWELLERY",
      
    },

];

function ExploreJewellery() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-8 sm:py-8">
        <h2 className="text-2xl font-medium tracking-tight text-gray-800">
          Explore Bhima Jewellers
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="w-full min-h-60 flex justify-center items-center bg-gray-50 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-72 lg:aspect-none">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className=" object-center object-cover w-36 h-36"
                />
              </div>
              <div className="mt-2 flex justify-between">
                <div>
                  <h3 className="text-xs font-medium text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExploreJewellery;
