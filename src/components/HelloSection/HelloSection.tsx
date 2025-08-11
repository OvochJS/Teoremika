import logo from "@/logoTM-white.png";
import style from "./HelloSection.module.scss";

export function HelloSection() {
  return (
    <div className={"centering " + style.bg}>
      <div className="content grid-layout">
        <div className={style.helloFrame}>
          <img src={logo} />
          <h1 className="title">TEOREMIKA</h1>
          <p>
            Teoremika — это сайт для самостоятельного изучения математики, где
            собраны как теоретические материалы, так и практические задания.
            Здесь вы найдёте всё необходимое для глубокого понимания
            математических тем и отработки навыков на практике.
          </p>
          <b>Откройте же для себя мир математики!</b>
        </div>
      </div>
    </div>
  );
}
