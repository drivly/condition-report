import { useEffect, useState } from "react";
import { atom, useRecoilState } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const sectionState = atom({
  key: "sectionState",
  default: {
    name: "Drivability, Keys, & History",
    index: 0,
  },
  effects_UNSTABLE: [persistAtom],
});

export function useSectionState() {
  const [isInitial, setInitial] = useState(true);
  const [sectionValue, setSectionValue] = useRecoilState(sectionState);

  useEffect(() => setInitial(false), []);

  return [isInitial === true ? false : sectionValue, setSectionValue];
}
