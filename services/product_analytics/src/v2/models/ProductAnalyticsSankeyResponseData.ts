import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsSankeyResponseAttributes } from "./ProductAnalyticsSankeyResponseAttributes";
import { ProductAnalyticsSankeyResponseType } from "./ProductAnalyticsSankeyResponseType";

export class ProductAnalyticsSankeyResponseData {
  "attributes"?: ProductAnalyticsSankeyResponseAttributes;
  "id"?: string;
  "type"?: ProductAnalyticsSankeyResponseType;
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
      type: "ProductAnalyticsSankeyResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsSankeyResponseType",
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
    return ProductAnalyticsSankeyResponseData.attributeTypeMap;
  }

  public constructor() {}
}
