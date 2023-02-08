import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import Text from "@/components/ui/Text";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BenefitType } from '@/shared/types'
import Benefit from "./Benefit";

type BenefitsProps = {
  setSelectedPage: (value: SelectedPage) => void;
};



const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6" />,
    title: 'State of the Art Facilities',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, obcaecati?'
  },
  {
    icon: <UserGroupIcon className="h-6" />,
    title: "100's of Diverse Classes",
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, obcaecati?'
  },
  {
    icon: <AcademicCapIcon className="h-6" />,
    title: 'Expert and Pro Trainers',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia, obcaecati?'
  }
]

const Benefits = ({ setSelectedPage }: BenefitsProps) => {
  return (
    <section
      id={SelectedPage.Benefits}
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* header */}
        <div className="md:my-5 md:w-3/5">
          <Text
            as="h1"
            className="font-montserrat basis-3/5 text-3xl font-bold uppercase"
          >
            more than just a gym
          </Text>
          <Text as="p" className="my-5 text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            distinctio minima libero animi itaque repellat pariatur assumenda ut
            magni illum?
          </Text>
        </div>
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit: BenefitType) => (
            <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
