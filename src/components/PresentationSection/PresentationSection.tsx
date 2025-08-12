import style from "./PresentationSection.module.scss";

import square from "@/square.png";
import pifagor from "@/pifagor.png";
import brain from "@/brain.png";
import graf from "@/graf.png";

export interface PresentationSectionProps {
  theme: "board" | "classic";
  title: string;
  description: string[];
}

export function PresentationSection({
  theme,
  title,
  description,
}: PresentationSectionProps) {
  const sources = theme === "classic" ? [brain, graf] : [pifagor, square];

  const info = description.map((text, i) => {
    return (
      <>
        <p>{text}</p>
        {i < description.length - 1 ? <hr /> : ""}
      </>
    );
  });

  return (
    <div className={"centering " + style[theme] + " " + style.paddings}>
      <div className={"content " + style.positionItem}>
        <img src={sources[0]} className={style.presentationImg} />
        <div className={style.presentationText}>
          <div className={style.title}>
            <h2>{title}</h2>
            <hr />
          </div>
          {info}
        </div>
        <img src={sources[1]} className={style.presentationImg} />
      </div>
    </div>
  );
}
