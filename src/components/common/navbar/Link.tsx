import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "@/shared/types";
import { lowerCasePage } from "@/utils";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      href={`#${lowerCasePage(page)}`}
      onClick={() => setSelectedPage(lowerCasePage(page))}
      className={`${
        selectedPage === lowerCasePage(page) ? "text-primary-500" : ""
      } transition duration-500 hover:text-primary-300`}
    >
      {page}
    </AnchorLink>
  );
};

export default Link;
