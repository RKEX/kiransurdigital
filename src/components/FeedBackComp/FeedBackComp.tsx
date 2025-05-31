import Image from "next/image";

const FeedBackComp = () => {
  return (
    <>
      <div className="bg-gray-100 ">
        {/* headlines of details start here */}
        <div className="font-bold text-center text-lg my-2">
          What Our Students Say About Us
        </div>
        {/* headlines of details end here  */}
        {/* image start here */}
        <div className="flex sm:max-md:flex-col  justify-between  mt-8">
          <div className="bg-white sm:max-md:me-8 shadow-xl border  p-4 rounded-lg">
            <div className="my-4">
              <Image
                src="/dp2.jpg"
                className="rounded-full"
                alt="feedback"
                width={120}
                height={120}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">
                "The SEO course was comprehensive and easy to follow. Highly
                recommend!"
              </div>
              <div className="font-bold">- Priya Sharma</div>
            </div>
          </div>
          <div className="bg-white shadow-xl sm:max-md:mt-8 flex flex-col justify-end border  p-4 rounded-lg">
            <div className="my-4">
              <Image
                src="/dp1.jpg"
                className="rounded-full"
                alt="feedback"
                width={120}
                height={120}
              />
            </div>
            <div className="flex flex-col gap-2">
              <div className="font-semibold">
                "Amazing insights into Google Ads. I saw immediate results!"
              </div>
              <div className="font-bold">- Rajesh Kumar</div>
            </div>
          </div>
        </div>
        {/* image end here */}
      </div>
    </>
  );
};

export default FeedBackComp;
