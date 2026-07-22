import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptData } from "./LLMObsPromptData";

/**
 * Response containing a list of LLM Observability prompts.
 */
export class LLMObsPromptsResponse {
  /**
   * List of LLM Observability prompts.
   */
  "data": Array<LLMObsPromptData>;
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
    data: {
      baseName: "data",
      type: "Array<LLMObsPromptData>",
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
    return LLMObsPromptsResponse.attributeTypeMap;
  }

  public constructor() {}
}
