import style from "./PresentationSection.module.scss";

export interface PresentationSectionProps {
  srcOne: string;
  srcTwo: string;
  title: string;
  theme: "board" | "classic";
  description: string[];
}

export function PresentationSection({
  srcOne,
  srcTwo,
  title,
  theme,
  description,
}: PresentationSectionProps) {
  const info = description.map((text, i) => {
    return (
      <>
        <p>{text}</p>
        {i < description.length - 1 ? <hr /> : ""}
      </>
    );
  });

  return (
    <div className={"centering " + style.centering + " " + style[theme]}>
      <div className={"grid-layout " + style.grid}>
        <img src={srcOne} className={style.presentationImg} />
        <div className={style.presentationText}>
          <div className={style.title}>
            <h2>{title}</h2>
            <hr/>
          </div>
          {info}
        </div>
        <img src={srcTwo} className={style.presentationImg} />
      </div>
    </div>
  );
}
