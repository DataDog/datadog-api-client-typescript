import { UnparsedObject } from "@datadog/datadog-api-client";

import { SampledAnalysisQuery } from "./SampledAnalysisQuery";
import { StructuredAnalysisQuery } from "./StructuredAnalysisQuery";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type TreemapBackendRequest20270101OneOfQuery =
  | StructuredAnalysisQuery
  | SampledAnalysisQuery
  | UnparsedObject;
