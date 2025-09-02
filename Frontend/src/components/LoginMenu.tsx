import { useState } from "react";

export function LoginMenu({ onClick }: { onClick: () => void }) {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div
      className={
        "fixed left-0 top-0 flex h-screen w-screen items-center justify-center"
      }
    >
      <div
        onClick={onClick}
        className="fixed left-0 top-0 h-screen w-screen justify-center bg-black/50"
      ></div>

      <div className="z-[9999] space-y-6 rounded-2xl bg-neutral-900 p-6 shadow-lg shadow-black">
        <h1 className="text-2xl font-bold tracking-tight">
          {isLogin ? "Вход" : "Регистрация"}
        </h1>

        <button
          onClick={() => setIsLogin(true)}
          className={
            (isLogin ? "active" : "") +
            " auth-mode-form rounded-l-md bg-blue-950 [&.active]:bg-blue-700 [&.active]:outline [&.active]:outline-blue-500"
          }
        >
          Вход
        </button>
        <button
          onClick={() => setIsLogin(false)}
          className={
            (isLogin ? "" : "active") +
            " auth-mode-form rounded-r-md bg-green-950 [&.active]:bg-green-700 [&.active]:outline [&.active]:outline-green-500"
          }
        >
          Регистрация
        </button>

        <form className="space-y-5">
          <div>
            <label htmlFor="userName" className="form-label">
              Логин:
            </label>
            <input
              type="text"
              id="userName"
              placeholder="Введите логин"
              className="form-input"
            />
          </div>

          {isLogin || (
            <div>
              <label htmlFor="userName" className="form-label">
                Email:
              </label>
              <input
                type="email"
                id="userName"
                placeholder="Введите логин"
                className="form-input"
              />
            </div>
          )}

          <div>
            <label htmlFor="password" className="form-label">
              Пароль:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Введите пароль"
              className="form-input"
            />
          </div>

          {isLogin || (
            <div>
              <label htmlFor="userName" className="form-label">
                Повтор пароля:
              </label>
              <input
                type="password"
                id="userName"
                placeholder="Введите логин"
                className="form-input"
              />
            </div>
          )}

          <button className="form-button">Войти</button>
        </form>
      </div>
    </div>
  );
}
