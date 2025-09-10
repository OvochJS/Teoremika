import { apiUser } from "$/services/userEntityService";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";

import z from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(3, { message: "Логин слишком короткий" })
    .max(20, { message: "Логин слишком длинный" }),
  password: z.string(),
});

const registerSchema = z
  .object({
    username: z
      .string()
      .min(3, { message: "Логин слишком короткий" })
      .max(20, { message: "Логин слишком длинный" })
      .transform((v) => v.toLowerCase().replace(/\s+/g, "_")),
    email: z
      .string()
      .trim()
      .transform((v) => (v === "" ? null : v))
      .nullable()
      .transform((v) => (v === undefined ? null : v)),

    password: z.string().min(6, "Пароль слишком короткий"),
    confirmPassword: z.string().min(6, "Введённые пароли не совпадают"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Введённые пароли не совпадают",
  });

type LoginSchema = z.infer<typeof loginSchema>;
type RegisterSchema = z.infer<typeof registerSchema>;

export function LoginMenu({ onClick }: { onClick: () => void }) {
  const [registerUser, { error }] = apiUser.useRegisterMutation();

  const [isLogin, setIsLogin] = useState(true);
  const loginForm = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });
  const registerForm = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
  });

  const onLoginSubmit: SubmitHandler<LoginSchema> = (data) => {
    console.log("login data", data);
    loginForm.reset();
  };

  const onRegisterSubmit: SubmitHandler<RegisterSchema> = (data) => {
    const { username, email, password } = data;

    const user = registerUser({ username, email, password });
    console.log(user);

    registerForm.reset();
  };

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

      <div className="max-w-98 z-[9999] w-[80%] space-y-6 rounded-2xl bg-neutral-900 p-6 shadow-lg shadow-black">
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

        <form
          className="space-y-5 text-base"
          onSubmit={(e) => {
            if (isLogin) {
              void loginForm.handleSubmit(onLoginSubmit)(e);
            } else {
              void registerForm.handleSubmit(onRegisterSubmit)(e);
            }
          }}
        >
          {isLogin ? (
            <>
              <div>
                <label htmlFor="username" className="form-label">
                  Логин *
                </label>
                <input
                  required
                  {...loginForm.register("username")}
                  type="text"
                  id="username"
                  placeholder="Введите логин"
                  className="form-input"
                  aria-invalid={
                    loginForm.formState.errors.username ? "true" : "false"
                  }
                />
                {loginForm.formState.errors.username && (
                  <span role="alert" className="text-sm text-red-700">
                    {loginForm.formState.errors.username?.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="password" className="form-label">
                  Пароль *
                </label>
                <input
                  required
                  {...loginForm.register("password")}
                  type="password"
                  id="password"
                  placeholder="Введите пароль"
                  className="form-input"
                  aria-invalid={
                    loginForm.formState.errors.password ? "true" : "false"
                  }
                />
                {loginForm.formState.errors.username && (
                  <span role="alert" className="text-sm text-red-700">
                    {loginForm.formState.errors.username?.message}
                  </span>
                )}
              </div>
            </>
          ) : (
            <>
              <div>
                <label htmlFor="username" className="form-label">
                  Логин *
                </label>
                <input
                  required
                  {...registerForm.register("username")}
                  type="text"
                  id="username"
                  placeholder="Введите логин"
                  className="form-input"
                  aria-invalid={
                    registerForm.formState.errors.username ? "true" : "false"
                  }
                />
                {registerForm.formState.errors.username && (
                  <span role="alert" className="text-sm text-red-700">
                    {registerForm.formState.errors.username?.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  {...registerForm.register("email")}
                  type="email"
                  id="email"
                  placeholder="Введите email"
                  className="form-input"
                  aria-invalid={
                    registerForm.formState.errors.email ? "true" : "false"
                  }
                />

                {registerForm.formState.errors.email && (
                  <span role="alert" className="text-sm text-red-700">
                    {registerForm.formState.errors.email?.message}
                  </span>
                )}
              </div>

              <div>
                <label htmlFor="password" className="form-label">
                  Пароль *
                </label>
                <input
                  required
                  {...registerForm.register("password")}
                  type="password"
                  id="password"
                  placeholder="Введите пароль"
                  className="form-input"
                  aria-invalid={
                    registerForm.formState.errors.password ? "true" : "false"
                  }
                />
                <span role="alert" className="text-sm text-red-700">
                  {registerForm.formState.errors.password?.message}
                </span>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="form-label">
                  Повтор пароля *
                </label>
                <input
                  required
                  {...registerForm.register("confirmPassword")}
                  type="password"
                  id="confirmPassword"
                  placeholder="Введите логин"
                  className="form-input"
                  aria-invalid={
                    registerForm.formState.errors.confirmPassword
                      ? "true"
                      : "false"
                  }
                />
                <span role="alert" className="text-sm text-red-700">
                  {registerForm.formState.errors.confirmPassword?.message}
                </span>
              </div>
            </>
          )}

          {isLogin ? (
            <button
              key="1"
              type="submit"
              className="form-button form-button-login"
            >
              Войти
            </button>
          ) : (
            <button
              key="2"
              type="submit"
              className="form-button form-button-register"
            >
              Зарегистрироваться
            </button>
          )}

          {error && (
            <span role="alert" className="text-sm text-red-700">
              Ошибка:{"status" in error ? (error.status === 409 && "Пользователь не существует" ): "отправки формы"}
            </span>
          )}
        </form>
      </div>
    </div>
  );
}
