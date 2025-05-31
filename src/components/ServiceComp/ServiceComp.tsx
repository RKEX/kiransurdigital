import { Headset, PenTool, Search, ThumbsUp } from "lucide-react";

const ServiceComp = () => {
  return (
    <>
      <div className=" ">
        {/* text start here */}
        <div className="text-center font-bold text-xl">Service Features</div>
        {/* text end here */}
        {/* icons & text start here */}
        <div className=" flex justify-between w-dvw px-8  mt-8">
          <div className="">
            {/* icon start here */}
            <div className="flex justify-center ">
              <Search size={32} className="text-orange-500 text-center " />
            </div>
            {/* icon end here */}
            {/* text start here */}
            <div className="text-center font-semibold">SEO</div>
          </div>
          {/* text end here */}
          <div className="">
            {/* icon start here */}
            <div className="">
              <Headset size={32} className="text-orange-500  text-center" />
            </div>
            {/* icon end here */}
            {/* text start here */}
            <div className="text-center font-semibold">SEM</div>
          </div>
          {/* text end here */}
          <div className=" ">
            {/* icon start here */}
            <div className="flex justify-center">
              <PenTool
                size={32}
                className="text-orange-500 text-center -rotate-90 "
              />
            </div>
            {/* icon end here */}
            {/* text start here */}
            <div className="text-center font-semibold">Content Marketing</div>
          </div>
          {/* text end here */}
          <div className="">
            {/* icon start here */}
            <div className="flex justify-center">
              <ThumbsUp size={32} className="text-orange-500 text-center" />
            </div>
            {/* icon end here */}
            {/* text start here */}
            <div className="text-center font-semibold">Social media ads</div>
          </div>
          {/* text end here */}
        </div>
        {/* icons & text end here */}
      </div>
    </>
  );
};

export default ServiceComp;
