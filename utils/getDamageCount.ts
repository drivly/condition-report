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


// let damageSections: { section: string; damageItems: any; }[] = [];
//   let damageItems = section.map((items) =>
//     items?.responses.filter((response) => {
//       if (response?.answers[0]?.answer?.connotation === -1) {
//         damageSections.push({
//           section: response?.question?.section,
//           damageItems: response?.answers[0]?.answer,
//         });
//       }
//     })
//   );

//   let totalDamages = damageItems?.length;

//   console.log(damageSections);