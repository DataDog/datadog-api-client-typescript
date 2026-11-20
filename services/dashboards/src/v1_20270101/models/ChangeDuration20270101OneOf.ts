import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChangeDurationAnyOfAnyOfItemType } from "./ChangeDurationAnyOfAnyOfItemType";
import { FixedSpan2 } from "./FixedSpan2";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ChangeDuration20270101OneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "customTimeframe": FixedSpan2;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ChangeDurationAnyOfAnyOfItemType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customTimeframe: {
      baseName: "custom_timeframe",
      type: "FixedSpan2",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ChangeDurationAnyOfAnyOfItemType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChangeDuration20270101OneOf.attributeTypeMap;
  }

  public constructor() {}
}
