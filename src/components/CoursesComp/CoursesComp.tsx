import { Button } from "../ui/button";

const CoursesComp = () => {
  return (
    <>
      <div className=" w-full flex justify-center flex-col">
        <div className="container mx-auto">
          {/* headlines start here */}
          <div className="grid gap-4 ">
            <div className="font-bold font-sans text-center mt-4 text-2xl">
              Learn Digital Marketing and Build Your Career from Scratch
            </div>
            <div className="font-semibold text-center ">
              Hands-on training for students to master SEO, social media,
              content creation, and earn online through freelancing or jobs.
            </div>
          </div>
          {/* headlines end here */}
        </div>
        {/* Details start here */}
        <div className="">
          {/* subheadlines start here */}
          <div className="text-center font-bold  text-xl my-5">
            Our Student-Focused Courses Include:
          </div>
          {/* subheadlines end here */}
          <div className=" bg-orange-300/25 w-full py-10 ">
            <div className=" flex gap-10 sm:max-md:flex-col container mx-auto justify-center">
              <div className="">
                {/* headlines of details start here */}
                <div className="font-bold text-lg my-2">
                  Beginner to Pro Digital Marketing Program
                </div>
                {/* headlines of details end here */}
                {/* list start here */}
                <div className="">
                  <ul className="list-disc gap-2 grid font-semibold">
                    <li>Duration: 2.5 Months</li>
                    <li>
                      Covers SEO, Social Media, Google Ads, YouTube, Canva
                    </li>
                    <li>
                      Marketing Funnel DesignPerfect for HS/College students &
                      freshers
                    </li>
                  </ul>
                </div>
                {/* list end here */}
              </div>
              <div className="">
                {" "}
                {/* headlines of details start here */}
                <div className="font-bold text-lg my-2">
                  Freelancing & Earning with Digital Skills
                </div>
                {/* headlines of details end here */}
                {/* list start here */}
                <div className="">
                  <ul className="list-disc gap-2 grid font-semibold">
                    <li>Duration: 1.5 Months</li>
                    <li>Learn Fiverr, Upwork, Portfolio Building</li>
                    <li>Earn from home using your skills</li>
                  </ul>
                </div>
                {/* list end here */}
              </div>
              <div className="">
                {" "}
                {/* headlines of details start here */}
                <div className="font-bold text-lg my-2">
                  Social Media & YouTube Growth Course
                </div>
                {/* headlines of details end here */}
                {/* list start here */}
                <div className="">
                  <ul className="list-disc gap-2 grid font-semibold">
                    <li>Duration: 1 Month</li>
                    <li>Instagram Reels, YouTube Monetization, Branding</li>
                    <li>Best for content creators & student influencers</li>
                  </ul>
                </div>
                {/* list end here */}
              </div>
              <div className="">
                {" "}
                {/* headlines of details start here */}
                <div className="font-bold text-lg my-2">
                  SEO Specialist Training
                </div>
                {/* headlines of details end here */}
                {/* list start here */}
                <div className="">
                  <ul className="list-disc gap-2 grid font-semibold">
                    <li>Duration: 1.5 Months</li>
                    <li>In-depth Keyword Research, On-page, Off-page SEO</li>
                    <li>
                      Ideal for bloggers, web developers, and aspiring SEOs
                    </li>
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
            Enroll Today & Start Your Digital Career
          </div>
          <div className="text-center font-semibold text-lg">
            Get a custom roadmap to grow your future online
          </div>
          <div className="flex justify-center gap-2 my-5">
            {/* hyperlink start here */}
            <Button className="bg-orange-500 font-semibold hover:bg-orange-600 text-white">
              <a
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSejIrtwikoWLw0j4vBN6w_jIVFuLePrGrwfj2XNvqv-zkfQJQ/viewform?usp=dialog"
              >
                Apply today
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

export default CoursesComp;
