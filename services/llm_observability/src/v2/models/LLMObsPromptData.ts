import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptDataAttributes } from "./LLMObsPromptDataAttributes";
import { LLMObsPromptType } from "./LLMObsPromptType";

/**
 * Data object for an LLM Observability prompt.
 */
export class LLMObsPromptData {
  /**
   * Attributes of an LLM Observability prompt registry entry.
   */
  "attributes": LLMObsPromptDataAttributes;
  /**
   * Unique identifier of the prompt.
   */
  "id": string;
  /**
   * Resource type of an LLM Observability prompt.
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
      type: "LLMObsPromptDataAttributes",
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
    return LLMObsPromptData.attributeTypeMap;
  }

  public constructor() {}
}
