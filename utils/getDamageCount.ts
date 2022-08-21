import { Section } from "typings";

export default function getDamageCount(section: Section[]) {
  let resultArr = []
  for (let item of section) {
    let sectionName = item.name
    let damageItems = getDamageItems(item.responses)
    resultArr?.push({
      name: sectionName,
      damageTotal: damageItems?.length
    })
  }
  return resultArr
}


function getDamageItems(array: any) {
  return array?.filter(
    (response: { answers: { answer: { connotation: number; }; }[]; }) => response?.answers[0]?.answer?.connotation === -1
  );
}