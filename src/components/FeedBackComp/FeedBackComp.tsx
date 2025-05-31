import Image from "next/image";

const FeedBackComp = () => {
  return (
    <>
      <div className="bg-gray-100 w-full py-10">
        {/* Headline */}
        <div className="font-bold text-center text-2xl mb-10">
          What Our Students Say About Us
        </div>

        {/* Feedback Cards */}
        <div className="container mx-auto flex flex-wrap justify-center gap-8 px-4">
          {/* Card 1 */}
          <div className="bg-white w-full sm:w-[300px] shadow-xl border p-6 rounded-xl flex flex-col items-center text-center">
            <Image
              src="/dp1.jpg"
              className="rounded-full"
              alt="feedback"
              width={100}
              height={100}
            />
            <div className="mt-4 font-semibold text-gray-700">
              "This course helped me understand digital marketing from scratch.
              Now I’m confident to freelance."
            </div>
            <div className="font-bold mt-2 text-orange-600">- Ayesha Das</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white w-full sm:w-[300px] shadow-xl border p-6 rounded-xl flex flex-col items-center text-center">
            <Image
              src="/dp2.jpg"
              className="rounded-full"
              alt="feedback"
              width={100}
              height={100}
            />
            <div className="mt-4 font-semibold text-gray-700">
              "The hands-on projects and YouTube strategy lessons really worked.
              Thank you for the guidance!"
            </div>
            <div className="font-bold mt-2 text-orange-600">
              - Rakesh Mondal
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white w-full sm:w-[300px] shadow-xl border p-6 rounded-xl flex flex-col items-center text-center">
            <Image
              src="/dp3.jpg"
              className="rounded-full"
              alt="feedback"
              width={100}
              height={100}
            />
            <div className="mt-4 font-semibold text-gray-700">
              "Learning SEO and Canva was fun! The roadmap provided was super
              helpful for beginners like me."
            </div>
            <div className="font-bold mt-2 text-orange-600">- Arjun Pal</div>
          </div>

          {/* Card 4 */}
          <div className="bg-white w-full sm:w-[300px] shadow-xl border p-6 rounded-xl flex flex-col items-center text-center">
            <Image
              src="/dp4.jpg"
              className="rounded-full"
              alt="feedback"
              width={100}
              height={100}
            />
            <div className="mt-4 font-semibold text-gray-700">
              "I got my first Fiverr client after completing the freelancing
              module. Truly grateful!"
            </div>
            <div className="font-bold mt-2 text-orange-600">- Sneha Roy</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedBackComp;
