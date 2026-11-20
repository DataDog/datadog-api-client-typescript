import { UnparsedObject } from "@datadog/datadog-api-client";

import { AllListRequestVariants } from "./AllListRequestVariants";
import { HistogramRequest } from "./HistogramRequest";
import { ScalarFormulaRequest } from "./ScalarFormulaRequest";
import { TabularAdvancedQueryRequest } from "./TabularAdvancedQueryRequest";
import { TabularLocalDatasetRequest } from "./TabularLocalDatasetRequest";
import { TimeseriesFormulaRequest } from "./TimeseriesFormulaRequest";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TabularDataRequest =
  | AllListRequestVariants
  | TabularAdvancedQueryRequest
  | TimeseriesFormulaRequest
  | ScalarFormulaRequest
  | TabularLocalDatasetRequest
  | HistogramRequest
  | UnparsedObject;
