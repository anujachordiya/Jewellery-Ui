function BhimaAdvantages() {
  return (
    <div
      className="mx-auto mt-8 px-4 sm:px-6 lg:px-16"
      style={{ paddingTop: "18px", paddingBottom: "18px",backgroundColor:'#fff8ef' }}
    >
      <h1 className="flex items-center font-normal justify-center text-center text-2xl mt-2 ">
        Bhima Advantage
      </h1>
      <div
        className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5"
        style={{ paddingTop: "30px" }}
      >
        <div className="col-span-1 flex flex-col items-center justify-center border-r border-gray-300  md:col-span-2 lg:col-span-1">
          <img
            src="/assets/certificate.svg"
            className="h-8 w-8"
            alt="certificate"
          />
          <p className="text-sm font-normal text-center mt-3">
            100% CERTIFIED <br></br>JEWELLERY
          </p>
        </div>
        <div className="col-span-1 flex flex-col border-r border-gray-300 items-center justify-center md:col-span-2 lg:col-span-1">
          <img
            src="/assets/fullRefund.svg"
            alt="full-refund"
            className="h-8 w-8"
          />
          <p className="text-sm font-normal text-center mt-3">
            100% <br></br>REFUND
          </p>
        </div>
        <div className="col-span-1 border-r border-gray-300 flex flex-col items-center justify-center md:col-span-2 lg:col-span-1">
          <img src="/assets/exchange.svg" alt="exchange" className="h-8 w-8" />
          <p className="text-sm font-normal text-center mt-3">
            LIFETIME <br></br>EXCHANGE
          </p>
        </div>
        <div className="col-span-1 border-r border-gray-300 flex flex-col items-center justify-center md:col-span-3 lg:col-span-1">
          <span className="h-8 w-8">
            <img
              src="/assets/freeShipping.svg"
              alt="free shipping"
              className="h-8 w-8"
            />
          </span>
          <p className="text-sm font-normal text-center mt-3">
            FREE SHIPPING <br></br> AND INSURANCE
          </p>
        </div>
        <div className="col-span-2 flex flex-col items-center justify-center md:col-span-3 lg:col-span-1">
          <img
            src="/assets/nearyou.svg"
            alt="store near by"
            className="h-8 w-8"
          />
          <p className="text-sm font-normal text-center mt-3">
            PHYSICAL STORE <br></br>NEAR YOU
          </p>
        </div>
      </div>
    </div>
  );
}

export default BhimaAdvantages;
