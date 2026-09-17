import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RecommendationsFilterRequestData } from "./RecommendationsFilterRequestData";

/**
 * JSON:API request body for filtering cost recommendations.
 */
export class RecommendationsFilterRequest {
  /**
   * JSON:API resource containing the cost recommendations filter. This legacy search contract
   * uses the resource ID for the filter expression rather than as a persistent resource identifier.
   */
  "data": RecommendationsFilterRequestData;
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
      type: "RecommendationsFilterRequestData",
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
    return RecommendationsFilterRequest.attributeTypeMap;
  }

  public constructor() {}
}
