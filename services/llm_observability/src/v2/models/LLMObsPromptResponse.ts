import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptData } from "./LLMObsPromptData";

/**
 * Response containing a single LLM Observability prompt.
 */
export class LLMObsPromptResponse {
  /**
   * Data object for an LLM Observability prompt.
   */
  "data": LLMObsPromptData;
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
    data: {
      baseName: "data",
      type: "LLMObsPromptData",
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
    return LLMObsPromptResponse.attributeTypeMap;
  }

  public constructor() {}
}
