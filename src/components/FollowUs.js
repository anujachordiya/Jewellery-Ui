function FollowUs() {
  return (
    <section className="bg-gray-200 p-4 mt-6">
      <p className="flex items-center justify-center text-4xl pt-5">
        Follow Us On
      </p>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10  lg:pr-16">
          <div className="md:flex-shrink-0 flex items-center">
            <img className="h-9" src="/assets/facebook.svg" alt="Tuple" />
            <p className="text-medium px-2">Facebook</p>
          </div>
          <blockquote className="mt-6 md:flex-grow md:flex md:flex-col">
            <div className="relative text-lg font-medium text-black md:flex-grow">
              <img className="" src="/assets/cover.svg" alt="Tuple" />
            </div>
          </blockquote>
        </div>
        <div
          className="pt-12 px-4 flex items-center sm:px-6 md:pt-16 md:pr-0 md:pl-10 lg:pl-16"
          style={{ justifyContent: "center", paddingTop: "50px" }}
        >
          <div className="md:flex-shrink-0">
            <div className="md:flex-shrink-0 flex items-center py-5">
              <img className="h-9" src="/assets/instagram.svg" alt="Tuple" />
              <p className="text-medium px-2">Facebook</p>
            </div>

            <img
              className="w-11/12"
              src="/assets/instagramCover.svg"
              alt="Tuple"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default FollowUs;
