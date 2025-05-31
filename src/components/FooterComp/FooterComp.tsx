import { Facebook, Instagram, LinkedinIcon, TwitterIcon } from "lucide-react";

const FooterComp = () => {
  return (
    <>
      <div className="bg-black w-full py-10 ">
        <div className="flex justify-between container mx-auto">
          {/* conatct part start here */}
          <div className="grid gap-2">
            <div className="font-bold text-white text-2xl">Contact Us</div>
            <div className="">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-white">Email :</span>
                <span className="font-semibold  text-white">
                  kiransurdigitalmarketing@gmail.com
                </span>
              </div>
              <div className=" flex gap-2 items-center">
                <span className="font-bold text-lg text-white">Phone No :</span>
                <span className="font-semibold text-center text-white">
                  9082053525
                </span>
              </div>
            </div>
          </div>
          {/* conatct part end here */}
          {/* Follow Us part start here */}
          <div className=" grid gap-2">
            <div className="font-bold text-white text-2xl text-center">
              Follow Us
            </div>
            <div className="">
              <div className="flex justify-center gap-2">
                <Facebook className="text-white" />
                <Instagram className="text-white" />
                <TwitterIcon className="text-white" />
                <LinkedinIcon className="text-white" />
              </div>
            </div>
          </div>
          {/* Follow Us part end here */}
        </div>
      </div>
    </>
  );
};

export default FooterComp;
