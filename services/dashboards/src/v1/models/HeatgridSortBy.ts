import { UnparsedObject } from "@datadog/datadog-api-client";

import { HeatgridSortByLabel } from "./HeatgridSortByLabel";
import { HeatgridSortByValue } from "./HeatgridSortByValue";

/**
 * Sort rows by aggregated value or group label.
 */
export type HeatgridSortBy =
  | HeatgridSortByValue
  | HeatgridSortByLabel
  | UnparsedObject;
