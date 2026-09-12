import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCreatePromptResponseDataAttributes } from "./LLMObsCreatePromptResponseDataAttributes";
import { LLMObsPromptType } from "./LLMObsPromptType";

/**
 * Data object returned after creating an Agent Observability prompt.
 */
export class LLMObsCreatePromptResponseData {
  /**
   * Attributes returned after creating an Agent Observability prompt and its first version.
   */
  "attributes": LLMObsCreatePromptResponseDataAttributes;
  /**
   * Unique identifier of the prompt.
   */
  "id": string;
  /**
   * Resource type of an Agent Observability prompt.
   */
  "type": LLMObsPromptType;
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
      type: "LLMObsCreatePromptResponseDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsPromptType",
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
    return LLMObsCreatePromptResponseData.attributeTypeMap;
  }

  public constructor() {}
}
