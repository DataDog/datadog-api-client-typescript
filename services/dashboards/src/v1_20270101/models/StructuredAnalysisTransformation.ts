import { UnparsedObject } from "@datadog/datadog-api-client";

import { StructuredAnalysisAggregation } from "./StructuredAnalysisAggregation";
import { StructuredAnalysisCalculatedField } from "./StructuredAnalysisCalculatedField";
import { StructuredAnalysisCast } from "./StructuredAnalysisCast";
import { StructuredAnalysisColumnExtraction } from "./StructuredAnalysisColumnExtraction";
import { StructuredAnalysisDestructure } from "./StructuredAnalysisDestructure";
import { StructuredAnalysisFilter } from "./StructuredAnalysisFilter";
import { StructuredAnalysisJoin } from "./StructuredAnalysisJoin";
import { StructuredAnalysisLimit } from "./StructuredAnalysisLimit";
import { StructuredAnalysisProjection } from "./StructuredAnalysisProjection";
import { StructuredAnalysisSort } from "./StructuredAnalysisSort";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type StructuredAnalysisTransformation =
  | StructuredAnalysisFilter
  | StructuredAnalysisColumnExtraction
  | StructuredAnalysisAggregation
  | StructuredAnalysisSort
  | StructuredAnalysisLimit
  | StructuredAnalysisCalculatedField
  | StructuredAnalysisCast
  | StructuredAnalysisJoin
  | StructuredAnalysisProjection
  | StructuredAnalysisDestructure
  | UnparsedObject;
