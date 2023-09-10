import { UnitedKingdomFlag } from "@/assets/icons";

export type MinLanguageData = {
  locale: string;
  value: string;
};

export type LanguageData = MinLanguageData & {
  description: string;
  placeholder: string;
  flag: typeof UnitedKingdomFlag;
};
