import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DashboardInlineSchema1 } from "./DashboardInlineSchema1";
import { ThresholdFormattingRule } from "./ThresholdFormattingRule";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ToplistBackendRequest20270101OneOf4463323520 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "queryOptions"?: { [key: string]: DashboardInlineSchema1 };
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "conditionalFormats"?: Array<ThresholdFormattingRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "q": string;
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
      type: "{ [key: string]: DashboardInlineSchema1; }",
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
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ToplistBackendRequest20270101OneOf4463323520.attributeTypeMap;
  }

  public constructor() {}
}
