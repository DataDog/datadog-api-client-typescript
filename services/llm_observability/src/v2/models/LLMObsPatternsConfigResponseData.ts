import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsConfigAttributes } from "./LLMObsPatternsConfigAttributes";
import { LLMObsPatternsConfigType } from "./LLMObsPatternsConfigType";

/**
 * Data object of an LLM Observability patterns configuration.
 */
export class LLMObsPatternsConfigResponseData {
  /**
   * Attributes of an LLM Observability patterns configuration.
   */
  "attributes": LLMObsPatternsConfigAttributes;
  /**
   * Unique identifier of the configuration.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability patterns configuration.
   */
  "type": LLMObsPatternsConfigType;
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
      type: "LLMObsPatternsConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPatternsConfigType",
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
    return LLMObsPatternsConfigResponseData.attributeTypeMap;
  }

  public constructor() {}
}
