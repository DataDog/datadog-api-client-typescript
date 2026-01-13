import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ComponentRecommendation } from "./ComponentRecommendation";

/**
 * Attributes of the SPA Recommendation resource. Contains recommendations for both driver and executor components.
 */
export class RecommendationAttributes {
  "confidenceLevel"?: number;
  /**
   * Resource recommendation for a single Spark component (driver or executor). Contains estimation data used to patch Spark job specs.
   */
  "driver": ComponentRecommendation;
  /**
   * Resource recommendation for a single Spark component (driver or executor). Contains estimation data used to patch Spark job specs.
   */
  "executor": ComponentRecommendation;
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
    confidenceLevel: {
      baseName: "confidence_level",
      type: "number",
      format: "double",
    },
    driver: {
      baseName: "driver",
      type: "ComponentRecommendation",
      required: true,
    },
    executor: {
      baseName: "executor",
      type: "ComponentRecommendation",
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
    return RecommendationAttributes.attributeTypeMap;
  }

  public constructor() {}
}
