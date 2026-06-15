import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsClusteredPointsResponseAttributes } from "./LLMObsPatternsClusteredPointsResponseAttributes";
import { LLMObsPatternsClusteredPointsType } from "./LLMObsPatternsClusteredPointsType";

/**
 * Data object of an LLM Observability patterns clustered points response.
 */
export class LLMObsPatternsClusteredPointsResponseData {
  /**
   * Attributes of an LLM Observability patterns clustered points response.
   */
  "attributes": LLMObsPatternsClusteredPointsResponseAttributes;
  /**
   * Identifier of the topic the points belong to.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability patterns clustered points response.
   */
  "type": LLMObsPatternsClusteredPointsType;
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
      type: "LLMObsPatternsClusteredPointsResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsClusteredPointsType",
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
    return LLMObsPatternsClusteredPointsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
