import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsConfigsListType } from "./LLMObsPatternsConfigsListType";
import { LLMObsPatternsConfigsResponseAttributes } from "./LLMObsPatternsConfigsResponseAttributes";

/**
 * Data object of a list of LLM Observability patterns configurations.
 */
export class LLMObsPatternsConfigsResponseData {
  /**
   * Attributes of a list of LLM Observability patterns configurations.
   */
  "attributes": LLMObsPatternsConfigsResponseAttributes;
  /**
   * Identifier of the list response.
   */
  "id": string;
  /**
   * Resource type of a list of LLM Observability patterns configurations.
   */
  "type": LLMObsPatternsConfigsListType;
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
      type: "LLMObsPatternsConfigsResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsConfigsListType",
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
    return LLMObsPatternsConfigsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
