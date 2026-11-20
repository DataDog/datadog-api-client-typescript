import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardInlineSchema6 } from "./DashboardInlineSchema6";
import { GeomapRequestStyle } from "./GeomapRequestStyle";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapBackendRegionsRequest20270101OneOf4457448128 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryOptions"?: { [key: string]: DashboardInlineSchema6 };
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "q": string;
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
    queryOptions: {
      baseName: "_query_options",
      type: "{ [key: string]: DashboardInlineSchema6; }",
    },
    conditionalFormats: {
      baseName: "conditional_formats",
      type: "Array<ThresholdFormattingRule>",
    },
    q: {
      baseName: "q",
      type: "string",
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
    return GeomapBackendRegionsRequest20270101OneOf4457448128.attributeTypeMap;
  }

  public constructor() {}
}
