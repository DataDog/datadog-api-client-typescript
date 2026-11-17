import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelSuggestionsRequestAttributes } from "./ProductAnalyticsFunnelSuggestionsRequestAttributes";
import { ProductAnalyticsFunnelSuggestionsRequestType } from "./ProductAnalyticsFunnelSuggestionsRequestType";

/**
 * Data of a feature suggestions request.
 */
export class ProductAnalyticsFunnelSuggestionsRequestData {
  /**
   * Attributes of a feature suggestions request.
   */
  "attributes"?: ProductAnalyticsFunnelSuggestionsRequestAttributes;
  /**
   * Type of a feature suggestions request.
   */
  "type": ProductAnalyticsFunnelSuggestionsRequestType;
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
      type: "ProductAnalyticsFunnelSuggestionsRequestAttributes",
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsFunnelSuggestionsRequestType",
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
    return ProductAnalyticsFunnelSuggestionsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
