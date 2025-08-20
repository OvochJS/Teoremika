import square from "@/square.png";
import brain from "@/brain.png";

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
  const sources = theme === "classic" ? brain : square;

  const info = description.map((text, i) => {
    return (
      <>
        <p className="text-base sm:text-lg lg:text-2xl 2xl:text-3xl">{text}</p>
        {i < description.length - 1 ? (
          <hr className="my-2 group-[.board]:my-1 group-[.board]:h-2 group-[.board]:border-0 group-[.board]:bg-[url(@/pAfter.png)] group-[.board]:bg-contain group-[.board]:bg-center group-[.board]:bg-no-repeat lg:group-[.board]:h-3 2xl:my-5 2xl:border-2 2xl:group-[.board]:my-4" />
        ) : (
          ""
        )}
      </>
    );
  });

  return (
    <div
      className={
        "group flex justify-center pt-6 pb-9 [&.board]:bg-neutral-950 [&.classic]:bg-neutral-900 " +
        theme
      }
    >
      <div
        className={
          "flex w-3xl items-center justify-around px-6 sm:justify-between lg:w-5xl lg:px-12 2xl:w-384 2xl:p-25 " +
          (theme === "classic" ? "flex-row-reverse" : "")
        }
      >
        <img src={sources} className="hidden sm:block sm:w-[25%]" />
        <div
          className={
            "max-w-90 p-0 text-center lg:max-w-122 2xl:max-w-172 " +
            (theme === "classic" ? "sm:text-left" : "sm:text-right")
          }
        >
          <div className="mb-2 inline-block lg:mb-4">
            <h2 className="mx-5 mb-1 text-2xl font-extrabold sm:text-4xl lg:mb-3 lg:text-5xl 2xl:mx-12 2xl:text-6xl">
              {title}
            </h2>
            <hr className="group-[.board]:h-3 group-[.board]:border-0 group-[.board]:bg-[url(@/titleAfter.png)] group-[.board]:bg-contain group-[.board]:bg-center group-[.board]:bg-no-repeat 2xl:border-2" />
          </div>
          {info}
        </div>
      </div>
    </div>
  );
}
