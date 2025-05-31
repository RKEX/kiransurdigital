import { Button } from "../ui/button";

const ConsultationComp = () => {
  return (
    <>
      <div className=" w-full flex justify-center flex-col">
        <div className="container mx-auto">
          {/* headlines start here */}
          <div className="grid gap-4">
            <div className="font-bold font-sans text-center mt-4 text-2xl">
              Personalized Business Consultation & Growth Services
            </div>
            <div className="font-semibold text-center ">
              Unlock your business’s full potential with expert strategies in
              digital marketing, branding, and automation tailored for
              entrepreneurs.
            </div>
          </div>
          {/* headlines end here */}
        </div>
        {/* Details start here */}
        <div className=" ">
          {/* subheadlines start here */}
          <div className="text-center font-bold text-xl my-5">
            Our Paid Business Services Include:
          </div>
          {/* subheadlines end here */}
          <div className=" bg-orange-300/25 w-full py-10 ">
            <div className=" flex gap-10 sm:max-md:flex-col container mx-auto justify-center">
              <div className="">
                {/* headlines of details start here */}
                <div className="font-bold text-lg my-2">
                  Full Digital Marketing Strategy Setup
                </div>
                {/* headlines of details end here */}
                {/* list start here */}
                <div className="">
                  <ul className="list-disc gap-2 grid font-semibold">
                    <li>Competitor Analysis</li>
                    <li>Target Audience Research</li>
                    <li>Marketing Funnel Design</li>
                  </ul>
                </div>
                {/* list end here */}
              </div>
              <div className="sm:max-md:pt-3 ">
                {" "}
                {/* headlines of details start here */}
                <div className="font-bold text-lg my-2">
                  Website SEO Audit & Optimization
                </div>
                {/* headlines of details end here */}
                {/* list start here */}
                <div className="">
                  <ul className="list-disc gap-2 grid font-semibold">
                    <li>On-Page & Off-Page SEO</li>
                    <li>Local SEO for Google My Business</li>
                    <li>Monthly Ranking Report</li>
                  </ul>
                </div>
                {/* list end here */}
              </div>
              <div className="sm:max-md:pt-3 sm:max-md:flex-col">
                {" "}
                {/* headlines of details start here */}
                <div className="font-bold text-lg my-2">
                  Social Media Branding & Ad Campaigns
                </div>
                {/* headlines of details end here */}
                {/* list start here */}
                <div className="">
                  <ul className="list-disc gap-2 grid font-semibold">
                    <li>Business Page Setup & Optimization</li>
                    <li>Facebook/Instagram Paid Ads Setup</li>
                    <li>Monthly Growth Plan</li>
                  </ul>
                </div>
                {/* list end here */}
              </div>
              <div className="sm:max-md:pt-3 sm:max-md:flex-col">
                {" "}
                {/* headlines of details start here */}
                <div className="font-bold text-lg my-2">
                  Google Ads & YouTube Promotion
                </div>
                {/* headlines of details end here */}
                {/* list start here */}
                <div className="">
                  <ul className="list-disc gap-2 grid font-semibold">
                    <li>Lead Generation Campaigns</li>
                    <li>Video Ads Setup & Optimization</li>
                    <li>Views and watch time</li>
                  </ul>
                </div>
                {/* list end here */}
              </div>
            </div>
          </div>
        </div>
        {/* Details end here */}
        {/* booking start here */}
        <div className="">
          <div className="text-center font-bold text-xl my-5">
            Book a 1-on-1 Consultation Today
          </div>
          <div className="text-center font-semibold text-lg">
            Get a custom roadmap to grow your business online
          </div>
          <div className="flex justify-center gap-2 my-5">
            {/* hyperlink start here */}
            <Button className="bg-orange-500 font-semibold hover:bg-orange-600 text-white">
              <a
                target="blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7WN5YyyY2Tg_hKruNOAt_ZNPRR4MvQFPEH9KEua6N1P8fdQ/viewform"
              >
                Book Now
              </a>
            </Button>

            {/* hyperlink end here */}
          </div>
        </div>
        {/* booking end here */}
      </div>
    </>
  );
};

export default ConsultationComp;
