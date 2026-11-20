import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogQueryDefinition } from "./LogQueryDefinition";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ToplistBackendRequest20270101OneOf4463530592 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "appsecspanQuery": LogQueryDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    appsecspanQuery: {
      baseName: "appsecspan_query",
      type: "LogQueryDefinition",
      required: true,
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ToplistBackendRequest20270101OneOf4463530592.attributeTypeMap;
  }

  public constructor() {}
}
