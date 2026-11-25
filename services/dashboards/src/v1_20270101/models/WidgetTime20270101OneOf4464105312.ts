import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LegacyLiveSpan } from "./LegacyLiveSpan";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetTime20270101OneOf4464105312 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hideIncompleteCostData"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "liveSpan": LegacyLiveSpan;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hideIncompleteCostData: {
      baseName: "hide_incomplete_cost_data",
      type: "boolean",
    },
    liveSpan: {
      baseName: "live_span",
      type: "LegacyLiveSpan",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetTime20270101OneOf4464105312.attributeTypeMap;
  }

  public constructor() {}
}
