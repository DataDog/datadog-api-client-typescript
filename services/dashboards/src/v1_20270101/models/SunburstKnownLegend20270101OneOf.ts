import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SunburstKnownLegendAnyOfAnyOfItemType } from "./SunburstKnownLegendAnyOfAnyOfItemType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SunburstKnownLegend20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": SunburstKnownLegendAnyOfAnyOfItemType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "SunburstKnownLegendAnyOfAnyOfItemType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SunburstKnownLegend20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
