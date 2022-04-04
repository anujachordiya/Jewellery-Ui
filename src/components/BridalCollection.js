function BridalCollection() {
  return (
    <section className="" style={{backgroundColor:'#ae9e94'}}>
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2 md:px-6 lg:px-8">
        <div className="py-12 px-4 sm:px-6 md:flex md:flex-col md:py-16 md:pl-0 md:pr-10  lg:pr-16">
          <div className="md:flex-shrink-0">
         <h1 className="font-medium text-5xl">Virtual Try. <br></br> Anytime. Anywhere</h1>
          </div>
          <blockquote className="mt-8 md:flex-grow md:flex md:flex-col">
            <div className="relative text-3xl font-medium text-black md:flex-grow">
             DISCOVER JEWELLERT THAT'S <br></br> PERFECT FOR YOU!
             
              <p className="relative mt-6 text-xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.
              </p>
            </div>
            <footer className="mt-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 inline-flex rounded-full">
                 <button className="bg-black text-white p-2">TRY LIVE DEMO</button>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
        <div className="pt-12 px-4 flex flex-col lg:items-end items-center sm:px-6 md:pt-16 md:pr-0 md:pl-10 lg:pl-16" style={{justifyContent:'flex-end',paddingTop:'50px',}}>
          <div className="md:flex-shrink-0">
            <img
            className="border-l-2 border-white rounded"
              style={{ height: "500px" ,borderLeft:'15px solid white',borderRight:'15px solid white',borderTop:'15px solid white'}}
              src="/assets/adverstiment.svg"
              alt="Workcation"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BridalCollection;
