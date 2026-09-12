import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCreatePromptResponseData } from "./LLMObsCreatePromptResponseData";

/**
 * Response returned after creating an Agent Observability prompt.
 */
export class LLMObsCreatePromptResponse {
  /**
   * Data object returned after creating an Agent Observability prompt.
   */
  "data": LLMObsCreatePromptResponseData;
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
      type: "LLMObsCreatePromptResponseData",
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
    return LLMObsCreatePromptResponse.attributeTypeMap;
  }

  public constructor() {}
}
