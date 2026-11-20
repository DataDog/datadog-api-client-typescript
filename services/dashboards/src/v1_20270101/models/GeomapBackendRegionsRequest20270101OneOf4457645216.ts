import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendRegionsRequest20270101OneOf4457645216 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "profilemetricsQuery": LogQueryDefinition;
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
    profilemetricsQuery: {
      baseName: "profilemetrics_query",
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
    return GeomapBackendRegionsRequest20270101OneOf4457645216.attributeTypeMap;
  }

  public constructor() {}
}
