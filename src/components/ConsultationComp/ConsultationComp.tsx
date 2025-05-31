import { Button } from "../ui/button";

const ConsultationComp = () => {
  return (
    <>
      <div className=" flex justify-center flex-col">
        <div className="">
          {/* headlines start here */}
          <div className="grid gap-4">
            <div className="font-bold font-sans text-center mt-4 text-2xl">
              Personalized Business Consultation & Growth Services
            </div>
            <div className="font-semibold text-center">
              Unlock your business’s full potential with expert strategies in
              digital marketing, branding, and automation tailored for
              entrepreneurs.
            </div>
          </div>
          {/* headlines end here */}
        </div>

        {/* Details start here */}
        <div>
          {/* subheadlines start here */}
          <div className="text-center font-bold text-xl my-5">
            Our Paid Business Services Include:
          </div>
          {/* subheadlines end here */}

          <div className="bg-orange-300/25 py-10">
            <div className="md:flex justify-center gap-8 container mx-auto">
              {/* Card 1 */}
              <div className=" text-left">
                <div className="font-bold text-lg mb-2">
                  Full Digital Marketing Strategy Setup
                </div>
                <ul className="list-disc list-inside font-semibold text-sm space-y-1">
                  <li>Competitor Analysis</li>
                  <li>Target Audience Research</li>
                  <li>Marketing Funnel Design</li>
                </ul>
              </div>

              {/* Card 2 */}
              <div className=" text-left">
                <div className="font-bold text-lg mb-2">
                  Website SEO Audit & Optimization
                </div>
                <ul className="list-disc list-inside font-semibold text-sm space-y-1">
                  <li>On-Page & Off-Page SEO</li>
                  <li>Local SEO for Google My Business</li>
                  <li>Monthly Ranking Report</li>
                </ul>
              </div>

              {/* Card 3 */}
              <div className=" text-left">
                <div className="font-bold text-lg mb-2">
                  Social Media Branding & Ad Campaigns
                </div>
                <ul className="list-disc list-inside font-semibold text-sm space-y-1">
                  <li>Business Page Setup & Optimization</li>
                  <li>Facebook/Instagram Paid Ads Setup</li>
                  <li>Monthly Growth Plan</li>
                </ul>
              </div>

              {/* Card 4 */}
              <div className=" text-left">
                <div className="font-bold text-lg mb-2">
                  Google Ads & YouTube Promotion
                </div>
                <ul className="list-disc list-inside font-semibold text-sm space-y-1">
                  <li>Lead Generation Campaigns</li>
                  <li>Video Ads Setup & Optimization</li>
                  <li>Views and watch time</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Details end here */}

        {/* booking start here */}
        <div>
          <div className="text-center font-bold text-xl my-5">
            Book a 1-on-1 Consultation Today
          </div>
          <div className="text-center font-semibold text-lg">
            Get a custom roadmap to grow your business online
          </div>
          <div className="flex justify-center gap-2 my-5">
            <Button className="bg-orange-500 font-semibold hover:bg-orange-600 text-white">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSc7WN5YyyY2Tg_hKruNOAt_ZNPRR4MvQFPEH9KEua6N1P8fdQ/viewform"
              >
                Book Now
              </a>
            </Button>
          </div>
        </div>
        {/* booking end here */}
      </div>
    </>
  );
};

export default ConsultationComp;
