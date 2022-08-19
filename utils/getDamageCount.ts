import { Section } from "typings";

export default function getDamageCount(section: Section[], value: number) {
  let damageItems = section[value]?.responses.filter(
    (response) => response?.answers[0]?.answer?.connotation === -1
  );

  let totalDamages = damageItems?.length;

  return damageItems
    ? { total: totalDamages, section: section[value].name }
    : null;
}
