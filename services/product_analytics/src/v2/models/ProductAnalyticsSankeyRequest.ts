import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ProductAnalyticsSankeyRequestData } from "./ProductAnalyticsSankeyRequestData";

/**
 * Request body for a Sankey diagram query.
 */
export class ProductAnalyticsSankeyRequest {
  /**
   * The single JSON:API resource carrying a Sankey query. Its attributes hold the time window to
   * query, the search that selects the sessions, and the definition of the diagram to build.
   */
  "data": ProductAnalyticsSankeyRequestData;
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
    data: {
      baseName: "data",
      type: "ProductAnalyticsSankeyRequestData",
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
    return ProductAnalyticsSankeyRequest.attributeTypeMap;
  }

  public constructor() {}
}
