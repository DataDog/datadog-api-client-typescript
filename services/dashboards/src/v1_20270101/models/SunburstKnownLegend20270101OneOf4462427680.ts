import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SunburstKnownLegendAnyOfAnyOfItemType4452235232 } from "./SunburstKnownLegendAnyOfAnyOfItemType4452235232";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstKnownLegend20270101OneOf4462427680 {
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
  "type": SunburstKnownLegendAnyOfAnyOfItemType4452235232;
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
      type: "SunburstKnownLegendAnyOfAnyOfItemType4452235232",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstKnownLegend20270101OneOf4462427680.attributeTypeMap;
  }

  public constructor() {}
}
