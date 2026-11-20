import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WidgetNewFixedSpanType } from "./WidgetNewFixedSpanType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WidgetTime20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "from": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hideIncompleteCostData"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "to": number;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": WidgetNewFixedSpanType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "double",
    },
    hideIncompleteCostData: {
      baseName: "hide_incomplete_cost_data",
      type: "boolean",
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "double",
    },
    type: {
      baseName: "type",
      type: "WidgetNewFixedSpanType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WidgetTime20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
