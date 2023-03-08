import { SelectedPage } from "@/shared/types";
import { lowerCasePage } from "@/utils";
import classNames from "classnames";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  page: SelectedPage
  styles?: string
};

function AnchorButton({ children, page, setSelectedPage, styles }: Props) {

  return (
    <AnchorLink
      className={classNames(styles, "rounded-md px-10 py-2")}
      onClick={() => setSelectedPage(lowerCasePage(page))}
      href={`${page}`}
    >
      {children}
    </AnchorLink>
  );
}

export default AnchorButton;
