import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorListItem } from "./ProductAnalyticsMonitorListItem";

/**
 * A list of Product Analytics monitors.
 */
export class ProductAnalyticsMonitorListAttributes {
  /**
   * The monitors.
   */
  "monitors": Array<ProductAnalyticsMonitorListItem>;
  /**
   * Total number of monitors that match, across all pages.
   */
  "total": number;
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
    monitors: {
      baseName: "monitors",
      type: "Array<ProductAnalyticsMonitorListItem>",
      required: true,
    },
    total: {
      baseName: "total",
      type: "number",
      required: true,
      format: "int64",
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
    return ProductAnalyticsMonitorListAttributes.attributeTypeMap;
  }

  public constructor() {}
}
