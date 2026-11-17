import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelSuggestionsApplication } from "./ProductAnalyticsFunnelSuggestionsApplication";

/**
 * Attributes of a feature suggestions response.
 */
export class ProductAnalyticsFunnelSuggestionsResponseAttributes {
  /**
   * Suggested features, grouped by application and feature area.
   */
  "applications"?: Array<ProductAnalyticsFunnelSuggestionsApplication>;
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
    applications: {
      baseName: "applications",
      type: "Array<ProductAnalyticsFunnelSuggestionsApplication>",
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
    return ProductAnalyticsFunnelSuggestionsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
