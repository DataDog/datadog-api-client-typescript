import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsFunnelSuggestionsDomain } from "./ProductAnalyticsFunnelSuggestionsDomain";

/**
 * Suggested features of one application.
 */
export class ProductAnalyticsFunnelSuggestionsApplication {
  /**
   * ID of the RUM application.
   */
  "applicationId"?: string;
  /**
   * Feature areas of the application.
   */
  "domains"?: Array<ProductAnalyticsFunnelSuggestionsDomain>;
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
    applicationId: {
      baseName: "application_id",
      type: "string",
    },
    domains: {
      baseName: "domains",
      type: "Array<ProductAnalyticsFunnelSuggestionsDomain>",
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
    return ProductAnalyticsFunnelSuggestionsApplication.attributeTypeMap;
  }

  public constructor() {}
}
