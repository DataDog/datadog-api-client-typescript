import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Analysis plans resource type.
 */
export type ExperimentsAnalysisPlanWriteV2RequestDataType =
  | typeof ANALYSIS_PLANS
  | UnparsedObject;
export const ANALYSIS_PLANS = "analysis-plans";
