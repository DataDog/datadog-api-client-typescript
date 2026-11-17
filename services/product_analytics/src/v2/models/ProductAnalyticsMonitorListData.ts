import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsMonitorListAttributes } from "./ProductAnalyticsMonitorListAttributes";
import { ProductAnalyticsMonitorListType } from "./ProductAnalyticsMonitorListType";

/**
 * Data of a Product Analytics monitor list.
 */
export class ProductAnalyticsMonitorListData {
  /**
   * A list of Product Analytics monitors.
   */
  "attributes": ProductAnalyticsMonitorListAttributes;
  /**
   * ID of the list resource. Always `list`.
   */
  "id": string;
  /**
   * Product Analytics monitor list resource type.
   */
  "type": ProductAnalyticsMonitorListType;
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
    attributes: {
      baseName: "attributes",
      type: "ProductAnalyticsMonitorListAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsMonitorListType",
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
    return ProductAnalyticsMonitorListData.attributeTypeMap;
  }

  public constructor() {}
}
