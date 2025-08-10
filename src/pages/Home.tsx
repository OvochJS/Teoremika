import square from "@/square.png";
import pifagor from "@/pifagor.png";
import brain from "@/brain.png";
import graf from "@/graf.png";

import { HelloSection } from "#/HelloSection/HelloSection";
import { PresentationSection } from "#/PresentationSection/PresentationSection";

import type { PresentationSectionProps } from "#/PresentationSection/PresentationSection";

const OnePresentationProps: PresentationSectionProps = {
  srcOne: pifagor,
  srcTwo: square,
  title: "Справочник",
  theme: "board",
  description: [
    "Справочник — это раздел, где собраны все теоретические материалы по  математике, структурированные для удобства обучения.",
    "Информация  организована по классам (7–9 классы) и темам, как в образовательных  учреждениях.",
    "Такой подход поможет Вам быстро находить нужные  определения, формулы и теоремы, а также легко повторять материал в  рамках выбранного курса обучения.",
  ],
};

const TwoPresentationProps: PresentationSectionProps = {
  srcOne: brain,
  srcTwo: graf,
  title: "Задачи",
  theme: "classic",
  description: [
    'Раздел "Задачи" — ваш шанс не только закрепить теорию на практике, но и создавать собственные задания, делиться ими с другими и соревнуйтесь в решениях!',
    "Все задачи удобно отсортированы по темам, чтобы вы могли целенаправленно отрабатывать нужные навыки, учиться рассуждать и готовиться к экзаменам.",
    "Попробуйте свои силы, сравните свои ответы с подробными разборами и проверьте, кто из друзей справится лучше!",
  ],
};

export function Home() {
  return (
    <>
      <HelloSection />
      <PresentationSection {...OnePresentationProps} />
      <PresentationSection {...TwoPresentationProps} />
    </>
  );
}
