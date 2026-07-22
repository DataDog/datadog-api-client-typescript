import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsTopicsWithClusteredPointsResponseAttributes } from "./LLMObsPatternsTopicsWithClusteredPointsResponseAttributes";
import { LLMObsPatternsTopicsWithClusteredPointsType } from "./LLMObsPatternsTopicsWithClusteredPointsType";

/**
 * Data object of an LLM Observability patterns topics-with-clustered-points response.
 */
export class LLMObsPatternsTopicsWithClusteredPointsResponseData {
  /**
   * Attributes of an LLM Observability patterns topics-with-clustered-points response.
   */
  "attributes": LLMObsPatternsTopicsWithClusteredPointsResponseAttributes;
  /**
   * Identifier of the run the topics belong to.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability patterns topics-with-clustered-points response.
   */
  "type": LLMObsPatternsTopicsWithClusteredPointsType;
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
    attributes: {
      baseName: "attributes",
      type: "LLMObsPatternsTopicsWithClusteredPointsResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsTopicsWithClusteredPointsType",
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
    return LLMObsPatternsTopicsWithClusteredPointsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
