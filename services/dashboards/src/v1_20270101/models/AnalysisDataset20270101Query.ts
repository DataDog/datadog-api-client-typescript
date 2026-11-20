import { UnparsedObject } from "@datadog/datadog-api-client";

import { SampledAnalysisQuery } from "./SampledAnalysisQuery";
import { SqlAnalysisQuery } from "./SqlAnalysisQuery";
import { StructuredAnalysisQuery } from "./StructuredAnalysisQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type AnalysisDataset20270101Query =
  | SqlAnalysisQuery
  | StructuredAnalysisQuery
  | SampledAnalysisQuery
  | UnparsedObject;
