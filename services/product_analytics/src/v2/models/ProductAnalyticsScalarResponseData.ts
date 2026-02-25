import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsScalarResponseAttributes } from "./ProductAnalyticsScalarResponseAttributes";
import { ProductAnalyticsScalarResponseType } from "./ProductAnalyticsScalarResponseType";

/**
 * Data object for a scalar response.
 */
export class ProductAnalyticsScalarResponseData {
  "attributes"?: ProductAnalyticsScalarResponseAttributes;
  "id"?: string;
  "type"?: ProductAnalyticsScalarResponseType;
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
      type: "ProductAnalyticsScalarResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsScalarResponseType",
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
    return ProductAnalyticsScalarResponseData.attributeTypeMap;
  }

  public constructor() {}
}
