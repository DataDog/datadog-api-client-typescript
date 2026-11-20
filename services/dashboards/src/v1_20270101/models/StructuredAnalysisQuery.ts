import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { StructuredAnalysisQueryType } from "./StructuredAnalysisQueryType";
import { StructuredAnalysisTransformation } from "./StructuredAnalysisTransformation";

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
