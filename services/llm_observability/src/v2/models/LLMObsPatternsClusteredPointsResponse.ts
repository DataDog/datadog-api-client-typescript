import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsClusteredPointsResponseData } from "./LLMObsPatternsClusteredPointsResponseData";

/**
 * Response containing the clustered points of an LLM Observability topic.
 */
export class LLMObsPatternsClusteredPointsResponse {
  /**
   * Data object of an LLM Observability patterns clustered points response.
   */
  "data": LLMObsPatternsClusteredPointsResponseData;
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
      type: "LLMObsPatternsClusteredPointsResponseData",
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
    return LLMObsPatternsClusteredPointsResponse.attributeTypeMap;
  }

  public constructor() {}
}
