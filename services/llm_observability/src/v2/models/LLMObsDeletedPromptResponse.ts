import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsDeletedPromptData } from "./LLMObsDeletedPromptData";

/**
 * Response confirming that an LLM Observability prompt was deleted.
 */
export class LLMObsDeletedPromptResponse {
  /**
   * Data object confirming that an LLM Observability prompt was deleted.
   */
  "data": LLMObsDeletedPromptData;
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
      type: "LLMObsDeletedPromptData",
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
    return LLMObsDeletedPromptResponse.attributeTypeMap;
  }

  public constructor() {}
}
