import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptType } from "./LLMObsPromptType";
import { LLMObsUpdatePromptDataAttributes } from "./LLMObsUpdatePromptDataAttributes";

/**
 * Data object for updating an LLM Observability prompt.
 */
export class LLMObsUpdatePromptData {
  /**
   * Attributes for updating an LLM Observability prompt. At least one of `title` or `description` must be provided; both attributes are optional individually.
   */
  "attributes": LLMObsUpdatePromptDataAttributes;
  /**
   * Resource type of an LLM Observability prompt.
   */
  "type": LLMObsPromptType;
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
      type: "LLMObsUpdatePromptDataAttributes",
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
    return LLMObsUpdatePromptData.attributeTypeMap;
  }

  public constructor() {}
}
