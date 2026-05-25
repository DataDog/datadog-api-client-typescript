import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Analysis request resource type.
 */
export type AnalysisRequestDataType = typeof ANALYSIS_REQUEST | UnparsedObject;
export const ANALYSIS_REQUEST = "analysis_request";
