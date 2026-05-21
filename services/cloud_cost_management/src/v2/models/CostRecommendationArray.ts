import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationData } from "./CostRecommendationData";
import { RecommendationsPageMeta } from "./RecommendationsPageMeta";

/**
 * A page of cost recommendations with pagination metadata.
 */
export class CostRecommendationArray {
  /**
   * The list of cost recommendations on this page.
   */
  "data": Array<CostRecommendationData>;
  /**
   * Top-level JSON:API meta object for paginated cost recommendation responses.
   */
  "meta"?: RecommendationsPageMeta;
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
      type: "Array<CostRecommendationData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "RecommendationsPageMeta",
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
    return CostRecommendationArray.attributeTypeMap;
  }

  public constructor() {}
}
