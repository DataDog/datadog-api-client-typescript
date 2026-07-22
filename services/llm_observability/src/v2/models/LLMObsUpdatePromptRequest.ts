import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsUpdatePromptData } from "./LLMObsUpdatePromptData";

/**
 * Request to update an LLM Observability prompt's metadata.
 */
export class LLMObsUpdatePromptRequest {
  /**
   * Data object for updating an LLM Observability prompt.
   */
  "data": LLMObsUpdatePromptData;
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
      type: "LLMObsUpdatePromptData",
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
    return LLMObsUpdatePromptRequest.attributeTypeMap;
  }

  public constructor() {}
}
