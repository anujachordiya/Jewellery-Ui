const people = [
  {
    role: "News",
    imageUrl: "/assets/news.svg",
  },
  {
    role: "Promotion",
    imageUrl: "/assets/promotion.svg",
  },
  {
    role: "Video",
    imageUrl: "/assets/video.svg",
  },
];

export default function InformationCard() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-12">
        <div className="space-y-12">
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4">
                  <p className="text-2xl font-medium flex items-center justify-center">{person.role}</p>
                  <div className="aspect-w-3 p-3 border border-black aspect-h-2">
                    <img
                      className="object-cover  shadow-lg rounded-lg"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
