import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RecommendationV2RequestData } from "./RecommendationV2RequestData";

/**
 * Request body for retrieving SPA recommendations by forwarding a Spark job's raw arguments
 * instead of a precomputed shard.
 */
export class RecommendationV2RequestBody {
  /**
   * JSON:API resource object for the SPA v2 recommendation request.
   */
  "data": RecommendationV2RequestData;
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
      type: "RecommendationV2RequestData",
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
    return RecommendationV2RequestBody.attributeTypeMap;
  }

  public constructor() {}
}
