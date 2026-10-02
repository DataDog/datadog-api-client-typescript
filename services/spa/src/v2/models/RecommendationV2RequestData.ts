import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RecommendationV2RequestAttributes } from "./RecommendationV2RequestAttributes";
import { RecommendationV2RequestType } from "./RecommendationV2RequestType";

/**
 * JSON:API resource object for the SPA v2 recommendation request.
 */
export class RecommendationV2RequestData {
  /**
   * Attributes for requesting SPA recommendations by forwarding a Spark job's raw arguments
   * instead of a precomputed shard.
   */
  "attributes": RecommendationV2RequestAttributes;
  /**
   * JSON:API resource type for the SPA v2 recommendation request.
   */
  "type": RecommendationV2RequestType;
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
      type: "RecommendationV2RequestAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "RecommendationV2RequestType",
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
    return RecommendationV2RequestData.attributeTypeMap;
  }

  public constructor() {}
}
