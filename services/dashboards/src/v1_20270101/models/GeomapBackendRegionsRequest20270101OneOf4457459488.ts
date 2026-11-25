import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { LogQueryDefinition } from "./LogQueryDefinition";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendRegionsRequest20270101OneOf4457459488 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "auditQuery": LogQueryDefinition;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
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
    auditQuery: {
      baseName: "audit_query",
      type: "LogQueryDefinition",
      required: true,
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
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
    return GeomapBackendRegionsRequest20270101OneOf4457459488.attributeTypeMap;
  }

  public constructor() {}
}
