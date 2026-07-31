import { Fragment } from "react";
import { TextArrow } from "./text-arrow";
import { getCreditNameParts } from "@/lib/credit-links";
import type { CrewCredit } from "@/lib/projects";

export function CreditName({ credit }: { credit: CrewCredit }) {
  const parts = getCreditNameParts(credit);

  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={`${part.name}-${index}`}>
          {index ? " / " : null}
          {part.url ? (
            <a
              href={part.url}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-orange-deep"
            >
              {part.name} <TextArrow className="text-orange-deep" />
            </a>
          ) : (
            part.name
          )}
        </Fragment>
      ))}
    </>
  );
}
