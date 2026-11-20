import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetNewLiveSpanType } from "./WidgetNewLiveSpanType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetTime20270101OneOf4464103552 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hideIncompleteCostData"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": WidgetNewLiveSpanType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "unit": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": number;
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
    type: {
      baseName: "type",
      type: "WidgetNewLiveSpanType",
      required: true,
    },
    unit: {
      baseName: "unit",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetTime20270101OneOf4464103552.attributeTypeMap;
  }

  public constructor() {}
}
