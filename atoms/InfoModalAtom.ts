import { atom } from "recoil";

export const infoModalState = atom({
  key: "infoModalState",
  default: false,
});

export const moreInfoState = atom<string | null | undefined>({
  key: "moreInfoState",
  default: null,
});
