/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { StructuredAnalysisQueryType } from "./StructuredAnalysisQueryType";
import { StructuredAnalysisTransformation } from "./StructuredAnalysisTransformation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class StructuredAnalysisQuery {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "sourceDataset": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "transformations": Array<StructuredAnalysisTransformation>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": StructuredAnalysisQueryType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    sourceDataset: {
      baseName: "source_dataset",
      type: "string",
      required: true,
    },
    transformations: {
      baseName: "transformations",
      type: "Array<StructuredAnalysisTransformation>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "StructuredAnalysisQueryType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return StructuredAnalysisQuery.attributeTypeMap;
  }

  public constructor() {}
}
