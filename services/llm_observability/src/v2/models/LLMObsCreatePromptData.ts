import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCreatePromptDataAttributes } from "./LLMObsCreatePromptDataAttributes";
import { LLMObsPromptType } from "./LLMObsPromptType";

/**
 * Data object for creating an LLM Observability prompt.
 */
export class LLMObsCreatePromptData {
  /**
   * Attributes for creating an LLM Observability prompt and its first version. `prompt_id` and `template` are required; all other attributes are optional.
   */
  "attributes": LLMObsCreatePromptDataAttributes;
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
      type: "LLMObsCreatePromptDataAttributes",
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
    return LLMObsCreatePromptData.attributeTypeMap;
  }

  public constructor() {}
}
