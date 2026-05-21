import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CostRecommendationDataAttributes } from "./CostRecommendationDataAttributes";
import { CostRecommendationDataType } from "./CostRecommendationDataType";

/**
 * A single cost recommendation entry in JSON:API form.
 */
export class CostRecommendationData {
  /**
   * Attributes describing a single cost recommendation.
   */
  "attributes"?: CostRecommendationDataAttributes;
  /**
   * Unique identifier for the recommendation.
   */
  "id"?: string;
  /**
   * Recommendation resource type.
   */
  "type": CostRecommendationDataType;
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
      type: "CostRecommendationDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "CostRecommendationDataType",
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
    return CostRecommendationData.attributeTypeMap;
  }

  public constructor() {}
}
