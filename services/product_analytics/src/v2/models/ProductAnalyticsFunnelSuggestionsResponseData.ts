import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelSuggestionsResponseAttributes } from "./ProductAnalyticsFunnelSuggestionsResponseAttributes";
import { ProductAnalyticsFunnelSuggestionsResponseType } from "./ProductAnalyticsFunnelSuggestionsResponseType";

/**
 * Data of a feature suggestions response.
 */
export class ProductAnalyticsFunnelSuggestionsResponseData {
  /**
   * Attributes of a feature suggestions response.
   */
  "attributes": ProductAnalyticsFunnelSuggestionsResponseAttributes;
  /**
   * ID of the response.
   */
  "id": string;
  /**
   * Type of a feature suggestions response.
   */
  "type": ProductAnalyticsFunnelSuggestionsResponseType;
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
      type: "ProductAnalyticsFunnelSuggestionsResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ProductAnalyticsFunnelSuggestionsResponseType",
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
    return ProductAnalyticsFunnelSuggestionsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
