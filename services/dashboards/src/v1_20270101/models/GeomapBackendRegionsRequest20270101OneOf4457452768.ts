import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendRegionsRequest20270101OneOf4457452768 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "rumQuery": LogQueryDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "style"?: GeomapRequestStyle;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    rumQuery: {
      baseName: "rum_query",
      type: "LogQueryDefinition",
      required: true,
    },
    style: {
      baseName: "style",
      type: "GeomapRequestStyle",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapBackendRegionsRequest20270101OneOf4457452768.attributeTypeMap;
  }

  public constructor() {}
}
