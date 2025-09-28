import { Link } from "react-router";
import { ProblemsItem } from "./ProblemsItem";
import { problemsApi } from "$/services/problemsService";
import { setProblem } from "$/store/reducers/problemSlice";
import { useDispatch } from "react-redux";

export function ProblemsList() {
  const { data, error, isLoading } = problemsApi.useGetProblemsQuery();
  const dispatch = useDispatch();

  return (
    <div className="lg:max-w-99999 max-w-162 mx-auto w-full lg:w-[75%]">
      {error ? (
        <h1 className="text-2xl font-bold">Ошибка загрузки</h1>
      ) : isLoading ? (
        <h1 className="text-2xl font-bold">Загрузка...</h1>
      ) : (
        <>
          <h1 className="text-2xl font-bold">Найдено {data?.length} задач</h1>
          {data?.map((props, id) => (
            <Link
              onClick={() => dispatch(setProblem(props))}
              to={`${props.title}`}
              className="hover:scale-102 transform transition-transform duration-200"
              key={id}
            >
              <ProblemsItem {...props} />
            </Link>
          ))}
        </>
      )}
    </div>
  );
}