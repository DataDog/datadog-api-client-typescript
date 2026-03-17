import { UnparsedObject } from "@datadog/datadog-api-client";

import { SLOCountDefinitionWithBadEventsFormula } from "./SLOCountDefinitionWithBadEventsFormula";
import { SLOCountDefinitionWithTotalEventsFormula } from "./SLOCountDefinitionWithTotalEventsFormula";

/**
 * A count-based (metric) SLI specification, composed of three parts: the good events formula,
 * the bad or total events formula, and the underlying queries.
 * Exactly one of `total_events_formula` or `bad_events_formula` must be provided.
 */
export type SLOCountDefinition =
  | SLOCountDefinitionWithTotalEventsFormula
  | SLOCountDefinitionWithBadEventsFormula
  | UnparsedObject;
