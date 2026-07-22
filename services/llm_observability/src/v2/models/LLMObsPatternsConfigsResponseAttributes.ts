import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPatternsConfigItem } from "./LLMObsPatternsConfigItem";

/**
 * Attributes of a list of LLM Observability patterns configurations.
 */
export class LLMObsPatternsConfigsResponseAttributes {
  /**
   * List of patterns configurations.
   */
  "configs": Array<LLMObsPatternsConfigItem>;
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
    configs: {
      baseName: "configs",
      type: "Array<LLMObsPatternsConfigItem>",
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
    return LLMObsPatternsConfigsResponseAttributes.attributeTypeMap;
  }

  public constructor() {}
}
