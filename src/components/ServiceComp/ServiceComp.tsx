import { Headset, PenTool, Search, ThumbsUp } from "lucide-react";

const ServiceComp = () => {
  return (
    <div className="py-10 bg-gray-50">
      {/* Title */}
      <h2 className="text-center font-bold text-2xl mb-8">Service Features</h2>

      {/* Icons & Text Container */}
      <div className="flex flex-wrap justify-center gap-x-16 gap-y-10 px-6 sm:px-12">
        {/* SEO */}
        <div className="flex flex-col items-center max-w-[140px]">
          <Search className="text-orange-500" size={40} />
          <div className="mt-4 font-semibold text-center">SEO</div>
        </div>

        {/* SEM */}
        <div className="flex flex-col items-center max-w-[140px]">
          <Headset className="text-orange-500" size={40} />
          <div className="mt-4 font-semibold text-center">SEM</div>
        </div>

        {/* Content Marketing */}
        <div className="flex flex-col items-center max-w-[140px]">
          <PenTool className="text-orange-500 -rotate-90" size={40} />
          <div className="mt-4 font-semibold text-center">Content Marketing</div>
        </div>

        {/* Social Media Ads */}
        <div className="flex flex-col items-center max-w-[140px]">
          <ThumbsUp className="text-orange-500" size={40} />
          <div className="mt-4 font-semibold text-center">Social Media Ads</div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComp;
