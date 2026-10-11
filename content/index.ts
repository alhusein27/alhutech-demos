import type { DemoContent } from "./types";
import { restaurantContent } from "./restaurant";
import { salonContent } from "./salon";
import { bakeryContent } from "./bakery";
import { fashionContent } from "./fashion";
import { churchContent } from "./church";
import { realestateContent } from "./realestate";
import { schoolContent } from "./school";
import { clinicContent } from "./clinic";
import { lawfirmContent } from "./lawfirm";
import { carsContent } from "./cars";

export type { DemoContent };
export * from "./types";

export const allDemos: DemoContent[] = [
  restaurantContent,
  salonContent,
  bakeryContent,
  fashionContent,
  churchContent,
  realestateContent,
  schoolContent,
  clinicContent,
  lawfirmContent,
  carsContent,
];

export {
  restaurantContent,
  salonContent,
  bakeryContent,
  fashionContent,
  churchContent,
  realestateContent,
  schoolContent,
  clinicContent,
  lawfirmContent,
  carsContent,
};
