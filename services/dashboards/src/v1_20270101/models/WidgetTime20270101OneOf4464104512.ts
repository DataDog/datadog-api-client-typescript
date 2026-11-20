import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetCalendarAlignedSpanType } from "./WidgetCalendarAlignedSpanType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetTime20270101OneOf4464104512 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hideIncompleteCostData"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "offset": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": WidgetCalendarAlignedSpanType;
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
    offset: {
      baseName: "offset",
      type: "number",
      required: true,
      format: "double",
    },
    type: {
      baseName: "type",
      type: "WidgetCalendarAlignedSpanType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetTime20270101OneOf4464104512.attributeTypeMap;
  }

  public constructor() {}
}
