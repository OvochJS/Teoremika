import type { Section } from "$/services/documentationService";
import { Link } from "react-router";

export function SearchResult({ result }: { result: Section[] }) {
  return (
    <>
      {result.length ? (
        result.map((section) => {
          return (
            <Link
              className="block hover:bg-stone-300 py-0.5 px-1 rounded-xl"
              to={`/documentation/${section.title}/${section.idMarkdownFile}`}
            >
              {section.title}
            </Link>
          );
        })
      ) : (
        <span className="block py-0.5 px-1">Нет результатов</span>
      )}
    </>
  );
}
