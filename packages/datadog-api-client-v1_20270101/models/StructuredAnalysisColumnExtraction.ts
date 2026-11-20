/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StructuredAnalysisColumnExtractionType } from "./StructuredAnalysisColumnExtractionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisColumnExtraction {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "grokExpression": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "keepNulls"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sourceColumn": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisColumnExtractionType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    grokExpression: {
      baseName: "grok_expression",
      type: "string",
      required: true,
    },
    keepNulls: {
      baseName: "keep_nulls",
      type: "boolean",
    },
    sourceColumn: {
      baseName: "source_column",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisColumnExtractionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisColumnExtraction.attributeTypeMap;
  }

  public constructor() {}
}
