import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsPromptSDKData } from "./LLMObsPromptSDKData";

/**
 * Response containing a flattened LLM Observability prompt version for SDK consumption.
 */
export class LLMObsPromptSDKResponse {
  /**
   * Data object for a flattened LLM Observability prompt version returned for SDK consumption.
   */
  "data": LLMObsPromptSDKData;
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
      type: "LLMObsPromptSDKData",
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
    return LLMObsPromptSDKResponse.attributeTypeMap;
  }

  public constructor() {}
}
