import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsTopicsWithClusteredPointsResponseData } from "./LLMObsPatternsTopicsWithClusteredPointsResponseData";

/**
 * Response containing the topics, and the clustered points of their leaf topics,
 * discovered by an LLM Observability patterns run.
 */
export class LLMObsPatternsTopicsWithClusteredPointsResponse {
  /**
   * Data object of an LLM Observability patterns topics-with-clustered-points response.
   */
  "data": LLMObsPatternsTopicsWithClusteredPointsResponseData;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "LLMObsPatternsTopicsWithClusteredPointsResponseData",
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
    return LLMObsPatternsTopicsWithClusteredPointsResponse.attributeTypeMap;
  }

  public constructor() {}
}
