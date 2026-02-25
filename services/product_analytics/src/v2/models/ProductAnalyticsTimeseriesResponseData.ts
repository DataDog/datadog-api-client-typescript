import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsTimeseriesResponseAttributes } from "./ProductAnalyticsTimeseriesResponseAttributes";
import { ProductAnalyticsTimeseriesResponseType } from "./ProductAnalyticsTimeseriesResponseType";

export class ProductAnalyticsTimeseriesResponseData {
  "attributes"?: ProductAnalyticsTimeseriesResponseAttributes;
  "id"?: string;
  "type"?: ProductAnalyticsTimeseriesResponseType;
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
      type: "ProductAnalyticsTimeseriesResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsTimeseriesResponseType",
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
    return ProductAnalyticsTimeseriesResponseData.attributeTypeMap;
  }

  public constructor() {}
}
