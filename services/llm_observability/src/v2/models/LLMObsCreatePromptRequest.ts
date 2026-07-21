import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCreatePromptData } from "./LLMObsCreatePromptData";

/**
 * Request to create an LLM Observability prompt.
 */
export class LLMObsCreatePromptRequest {
  /**
   * Data object for creating an LLM Observability prompt.
   */
  "data": LLMObsCreatePromptData;
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
      type: "LLMObsCreatePromptData",
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
    return LLMObsCreatePromptRequest.attributeTypeMap;
  }

  public constructor() {}
}
