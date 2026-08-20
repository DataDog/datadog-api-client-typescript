import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsCalendarInterval } from "./ProductAnalyticsCalendarInterval";
import { ProductAnalyticsRetentionCalendarTimeIntervalType } from "./ProductAnalyticsRetentionCalendarTimeIntervalType";

/**
 * A retention interval aligned to calendar boundaries.
 */
export class ProductAnalyticsRetentionCalendarTimeInterval {
  /**
   * The discriminator identifying a calendar-aligned retention interval.
   */
  "type": ProductAnalyticsRetentionCalendarTimeIntervalType;
  /**
   * A calendar-aligned bucket definition, such as "every 1 week starting on Monday".
   */
  "value": ProductAnalyticsCalendarInterval;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };
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
      type: "ProductAnalyticsRetentionCalendarTimeIntervalType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "ProductAnalyticsCalendarInterval",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsRetentionCalendarTimeInterval.attributeTypeMap;
  }

  public constructor() {}
}
