import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import AnchorButton from "@/components/ui/Button/AnchorButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Hero = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <section
      id={SelectedPage.Home}
      className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0"
    >
      {/* image and main header */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          {/* headings */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img src={HomePageText} alt="homepage text" />
              </div>
            </div>
            <p className="mt-8 text-sm ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
              saepe at cumque officia, nihil non aliquam fugiat exercitationem
              eaque reprehenderit!
            </p>
          </motion.div>
          {/* action buttons */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <AnchorButton
              page={SelectedPage.ContactUs}
              setSelectedPage={setSelectedPage}
              styles="bg-secondary-500 hover:bg-primary-500 hover:text-white"
            >
              Join Now
            </AnchorButton>
            <AnchorLink
              href={SelectedPage.ContactUs}
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
            >
              <p>Learm More</p>
            </AnchorLink>
          </motion.div>
        </div>
        <div className="mt-16 flex basis-3/5 justify-center md:z-10 md:ml-40 md:justify-end">
          <img src={HomePageGraphic} alt="home page graphic" />
        </div>
      </motion.div>

      {/* sponsors */}
      {isAboveMediumScreens && (
        <div className="h-[150px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="redbull-sponsor" />
              <img src={SponsorForbes} alt="redbull-sponsor" />
              <img src={SponsorFortune} alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
