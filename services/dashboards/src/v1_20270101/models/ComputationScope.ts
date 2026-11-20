import { UnparsedObject } from "@datadog/datadog-api-client";

import { CellScope } from "./CellScope";
import { CohortScope } from "./CohortScope";
import { ReturnPeriodScope } from "./ReturnPeriodScope";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type ComputationScope =
  | CohortScope
  | ReturnPeriodScope
  | CellScope
  | UnparsedObject;
