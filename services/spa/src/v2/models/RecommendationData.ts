import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RecommendationAttributes } from "./RecommendationAttributes";
import { RecommendationType } from "./RecommendationType";

/**
 * JSON:API resource object for SPA Recommendation. Includes type, optional ID, and resource attributes with structured recommendations.
 */
export class RecommendationData {
  /**
   * Attributes of the SPA Recommendation resource. Contains recommendations for both driver and executor components.
   */
  "attributes": RecommendationAttributes;
  /**
   * Resource identifier for the recommendation. Optional in responses.
   */
  "id"?: string;
  /**
   * JSON:API resource type for Spark Pod Autosizing recommendations. Identifies the Recommendation resource returned by SPA.
   */
  "type": RecommendationType;
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
      type: "RecommendationAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "RecommendationType",
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
    return RecommendationData.attributeTypeMap;
  }

  public constructor() {}
}
