import { ProblemsList } from "#/ProblemsList";
import { ProblemsNavigation } from "#/ProblemsNavigation";

export function Problems() {
  return (
    <div className="min-h-100 flex justify-center bg-neutral-900 py-5">
      <div className="w-full px-2  2xl:w-384 2xl:px-25 lg:flex justify-around">
        <ProblemsNavigation />
        <ProblemsList />
      </div>
    </div>
  );
}
