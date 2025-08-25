import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RecommendationData } from "./RecommendationData";

/**
 * JSON:API document containing a single Recommendation resource. Returned by SPA when the Spark Gateway requests recommendations.
 */
export class RecommendationDocument {
  /**
   * JSON:API resource object for SPA Recommendation. Includes type, optional ID, and resource attributes with structured recommendations.
   */
  "data": RecommendationData;
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
      type: "RecommendationData",
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
    return RecommendationDocument.attributeTypeMap;
  }

  public constructor() {}
}
