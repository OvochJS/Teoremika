import logo from "@/logoTM-white.png";

export function HelloSection() {
  return (
    <div
      className={
        "flex justify-center bg-[linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('@/background.jpg')] bg-contain bg-repeat-x pt-9 pb-4 lg:pt-12 lg:pb-8 2xl:pt-16 2xl:pb-10"
      }
    >
      <div className="relative w-75 rounded-2xl border bg-black px-1 py-2 text-center lg:w-95 lg:border-2 lg:p-2.5 2xl:w-132 2xl:rounded-4xl 2xl:border-3 2xl:px-3 2xl:py-5">
        <img
          src={logo}
          className="absolute -top-7 left-33 size-9 rounded-sm border bg-black lg:-top-10 lg:left-41.5 lg:size-12 lg:border-2 2xl:-top-13 2xl:left-57 2xl:size-16 2xl:rounded-lg 2xl:border-3"
        />
        <h1 className="text-xl lg:text-2xl 2xl:text-4xl">TEOREMIKA</h1>
        <p className="mt-1 mb-2 text-xs lg:text-sm 2xl:text-lg">
          Teoremika — это сайт для самостоятельного изучения математики, где
          собраны как теоретические материалы, так и практические задания. Здесь
          вы найдёте всё необходимое для глубокого понимания математических тем
          и отработки навыков на практике.
        </p>
        <b className="text-sm lg:text-base 2xl:text-xl">
          Откройте же для себя мир математики!
        </b>
      </div>
    </div>
  );
}
