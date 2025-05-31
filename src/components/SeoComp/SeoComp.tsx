import SeoSearchCom from "./SeoSearchCom";

const SeoComp = () => {
  return (
    <>
      <div className="bg-orange-300/25 w-full flex justify-center py-6">
        <div className="grid gap-2">
          {/* text 1 start here */}
          <div className="font-bold font-sans text-center mt-4 text-2xl">
            Boost your Business with Proven Digital Marketing Strategies
          </div>
          {/* text 1 end here */}
          {/* text 2 start here */}
          <div className="font-semibold text-center ">
            Rank higher on Google with our expert SEO tools and courses
          </div>
          {/* text 2 end here */}
          {/* SEO search bar start here */}
          <SeoSearchCom />
          {/* SEO search bar end here */}
        </div>
      </div>
    </>
  );
};

export default SeoComp;
