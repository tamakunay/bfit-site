import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import Logo from "@/assets/Logo.png"
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import AnchorButton from "@/components/ui/Button/AnchorButton";

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfScreen: boolean
};

const Navbar = ({ selectedPage, setSelectedPage, isTopOfScreen }: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState(false)
  const flexBetween = "flex items-center justify-between";
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  const navbarBackground = isTopOfScreen ? "": "bg-primary-100 drop-shadow"

  return (
    <nav>
      <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            <img src={Logo} alt="logo" />
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact  Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8`}>
                  <p>Sign In</p>
                  <AnchorButton page={SelectedPage.ContactUs} styles="bg-secondary-500 hover:bg-primary-500 hover:text-white" setSelectedPage={setSelectedPage}>Join Now</AnchorButton>
                </div>
              </div>
            ) : (
              <button className="rounded-full bg-secondary-500 p-2" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-purple-100 drop-shadow-sxl">
          {/* close icon */}
          <div className="flex justify-end px-10 py-8">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>
          {/* menu items */}
          <div className={`ml-[10%] flex flex-col gap-10 text-2xl`}>
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact  Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <div className="flex flex-col gap-5 w-5/6">
              <p>Sign In</p>
              <AnchorButton page={SelectedPage.ContactUs} styles="bg-secondary-500" setSelectedPage={setSelectedPage}>Join Now</AnchorButton>
            </div>
          </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;
