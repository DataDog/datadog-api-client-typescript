import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCustomEvalConfigPromptContentValue } from "./LLMObsCustomEvalConfigPromptContentValue";

/**
 * A content block within a prompt message.
 */
export class LLMObsCustomEvalConfigPromptContent {
  /**
   * Content block type.
   */
  "type": string;
  /**
   * Value of a prompt message content block.
   */
  "value": LLMObsCustomEvalConfigPromptContentValue;
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
    type: {
      baseName: "type",
      type: "string",
      required: true,
    },
    value: {
      baseName: "value",
      type: "LLMObsCustomEvalConfigPromptContentValue",
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
    return LLMObsCustomEvalConfigPromptContent.attributeTypeMap;
  }

  public constructor() {}
}
