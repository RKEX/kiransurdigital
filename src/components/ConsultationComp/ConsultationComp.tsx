import { Button } from "../ui/button";

const ConsultationComp = () => {
  return (
    <div className="flex justify-center w-full flex-col">
      {/* Headline */}
      <div className="grid gap-4 text-center mt-4">
        <div className="font-bold font-sans text-2xl">
          Personalized Business Consultation & Growth Services
        </div>
        <div className="font-semibold">
          Unlock your business’s full potential with expert strategies in digital marketing, branding, and automation tailored for entrepreneurs.
        </div>
      </div>

      {/* Subheadline */}
      <div className="text-center font-bold text-xl my-5">
        Our Paid Business Services Include:
      </div>

      {/* Service Cards */}
      <div className="bg-orange-300/25 w-full py-10">
        <div className="flex flex-col lg:flex-row justify-center gap-10 container mx-auto">
          {/* Card 1 */}
          <div>
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
          <div>
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
          <div>
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
          <div>
            <div className="font-bold text-lg mb-2">
              Google Ads & YouTube Promotion
            </div>
            <ul className="list-disc list-inside font-semibold text-sm space-y-1">
              <li>Lead Generation Campaigns</li>
              <li>Video Ads Setup & Optimization</li>
              <li>Views and Watch Time</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="text-center font-bold text-xl my-5">
        Book a 1-on-1 Consultation Today
      </div>
      <div className="text-center font-semibold text-lg">
        Get a custom roadmap to grow your business online
      </div>
      <div className="flex justify-center my-5">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSc7WN5YyyY2Tg_hKruNOAt_ZNPRR4MvQFPEH9KEua6N1P8fdQ/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-md font-semibold"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default ConsultationComp;
