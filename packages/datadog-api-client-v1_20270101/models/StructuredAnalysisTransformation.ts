/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
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

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
