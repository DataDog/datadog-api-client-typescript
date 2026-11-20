import { UnparsedObject } from "@datadog/datadog-api-client";

import { RunChartGroupDimension } from "./RunChartGroupDimension";
import { RunChartValueDimension } from "./RunChartValueDimension";
import { RunChartXDimension } from "./RunChartXDimension";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type RunChartProjectionDimension =
  | RunChartXDimension
  | RunChartValueDimension
  | RunChartGroupDimension
  | UnparsedObject;
