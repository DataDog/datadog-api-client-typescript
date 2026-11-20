import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SunburstLegendAnyOfAnyOfItemType } from "./SunburstLegendAnyOfAnyOfItemType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstLegend20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hidePercent"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "hideValue"?: boolean;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": SunburstLegendAnyOfAnyOfItemType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    hidePercent: {
      baseName: "hide_percent",
      type: "boolean",
    },
    hideValue: {
      baseName: "hide_value",
      type: "boolean",
    },
    type: {
      baseName: "type",
      type: "SunburstLegendAnyOfAnyOfItemType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstLegend20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
