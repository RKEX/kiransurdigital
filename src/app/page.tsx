import ConsultationComp from "@/components/ConsultationComp/ConsultationComp";
import CoursesComp from "@/components/CoursesComp/CoursesComp";
import FeedBackComp from "@/components/FeedBackComp/FeedBackComp";
import FooterComp from "@/components/FooterComp/FooterComp";
import SeoComp from "@/components/SeoComp/SeoComp";
import ServiceComp from "@/components/ServiceComp/ServiceComp";
import TextOnlyComp from "@/components/TextOnlyComp/TextOnlyComp";

const page = () => {
  return (
    <>
      <div className=" grid w-full place-items-center gap-10">
        <SeoComp />
        <ConsultationComp />
        <CoursesComp />
        <TextOnlyComp />
        <ServiceComp />
        <FeedBackComp />
        <FooterComp />
      </div>
    </>
  );
};

export default page;
