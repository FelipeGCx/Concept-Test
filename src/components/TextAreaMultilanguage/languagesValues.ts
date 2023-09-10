import { markRaw, ref } from "vue";
import { LanguageData } from "@/types";
import {
  UnitedKingdomFlag,
  ColombiaFlag,
  ItalyFlag,
  FranceFlag,
} from "@/assets/icons";

export const languagesValues = ref<Array<LanguageData>>([
  {
    locale: "co",
    description: "descripción",
    value: "",
    placeholder: "escribe algo en español",
    flag: markRaw(ColombiaFlag),
  },
  {
    locale: "gb",
    description: "description",
    value: "",
    placeholder: "write something in english",
    flag: markRaw(UnitedKingdomFlag),
  },
  {
    locale: "it",
    description: "descrizione",
    value: "",
    placeholder: "scrivere qualcosa in italiano",
    flag: markRaw(ItalyFlag),
  },
  {
    locale: "fr",
    description: "description",
    value: "",
    placeholder: "écrire quelque chose en français",
    flag: markRaw(FranceFlag),
  },
]);
