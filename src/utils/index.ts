import { SelectedPage } from "@/shared/types";

export const lowerCasePage = (page: string) => page.toLowerCase().replace(/ /g, "") as SelectedPage
